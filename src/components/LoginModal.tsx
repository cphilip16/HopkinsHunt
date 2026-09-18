import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Key, User, BookOpen, Sparkles, Check, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LoginModal: React.FC = () => {
  const {
    isLoginModalOpen,
    setIsLoginModalOpen,
    profile,
    requestVerificationCode,
    verifyStudentCode,
    verificationNotice,
    loginWithDemoStudent,
  } = useApp();

  const [step, setStep] = useState<'credentials' | 'verify'>('credentials');
  const [studentName, setStudentName] = useState(profile.studentName || '');
  const [identifier, setIdentifier] = useState(profile.email || profile.jhedId || '');
  const [major, setMajor] = useState(profile.major || '');
  const [classYear, setClassYear] = useState(profile.classYear || 'Class of \'27');
  const [campus, setCampus] = useState(profile.campus || 'Homewood');

  // Verification Code State
  const [codeDigits, setCodeDigits] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMessage('Please enter your JHED ID or Johns Hopkins email.');
      return;
    }
    setErrorMessage('');
    requestVerificationCode(identifier);
    setStep('verify');
  };

  const handleDigitChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste of whole 6-digit code
      const pasted = value.replace(/\D/g, '').slice(0, 6).split('');
      const newDigits = [...codeDigits];
      pasted.forEach((char, i) => {
        if (i < 6) newDigits[i] = char;
      });
      setCodeDigits(newDigits);
      const nextInput = document.getElementById(`digit-input-5`);
      if (nextInput) nextInput.focus();
      return;
    }

    const newDigits = [...codeDigits];
    newDigits[index] = value;
    setCodeDigits(newDigits);

    // Auto-advance to next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`digit-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !codeDigits[index] && index > 0) {
      const prevInput = document.getElementById(`digit-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleAutofillCode = () => {
    if (verificationNotice?.code) {
      const digits = verificationNotice.code.split('');
      setCodeDigits(digits);
    }
  };

  const handleSubmitVerification = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = codeDigits.join('');
    if (fullCode.length < 6) {
      setErrorMessage('Please enter all 6 digits of the verification code.');
      return;
    }

    setIsVerifying(true);
    setErrorMessage('');

    setTimeout(() => {
      const cleanId = identifier.trim();
      const jhed = cleanId.includes('@') ? cleanId.split('@')[0] : cleanId;
      const email = cleanId.includes('@') ? cleanId : `${cleanId.toLowerCase()}@jh.edu`;

      const result = verifyStudentCode(fullCode, {
        studentName: studentName || 'Hopkins Student',
        jhedId: jhed,
        email: email,
        major: major || 'Liberal Arts & Sciences',
        classYear: classYear,
        campus: campus as any,
      });

      setIsVerifying(false);

      if (result.success) {
        setIsLoginModalOpen(false);
      } else {
        setErrorMessage(result.error || 'Invalid verification code.');
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        
        {/* Top Header with Hopkins Heritage Deep Blue */}
        <div className="bg-gradient-to-r from-hopkins-deep via-hopkins-heritage to-blue-900 text-white p-5 sm:p-7 relative flex-shrink-0">
          <button
            onClick={() => setIsLoginModalOpen(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close login modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 pr-8">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white text-hopkins-deep font-black text-lg sm:text-xl flex items-center justify-center shadow-lg ring-2 ring-sky-300 flex-shrink-0">
              JHU
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-sky-200">
                  Authentication & Security
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">
                  Hopkins SSO
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight mt-0.5">
                {step === 'credentials' ? 'Student Sign-In & Verification' : 'Hopkins Multi-Factor Verification'}
              </h2>
            </div>
          </div>
          <p className="text-xs text-blue-200/90 mt-2 leading-relaxed">
            Verify your official Johns Hopkins student identity to claim your verified explorer badge and sync your travel passport.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 pb-8 sm:pb-8">
          
          {/* STEP 1: Enter Credentials */}
          {step === 'credentials' && (
            <form onSubmit={handleSendCode} className="space-y-4">
              
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                  Johns Hopkins Email or JHED ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. shopkin1@jh.edu or shopkin1"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:bg-white focus:ring-2 focus:ring-hopkins-spirit outline-none transition-all"
                  />
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Accepts `@jh.edu`, `@jhu.edu`, or standard Hopkins Enterprise Directory ID.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Sydney Hopkins"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:bg-white focus:ring-2 focus:ring-hopkins-spirit outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Class / Standing
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Class of '27"
                    value={classYear}
                    onChange={(e) => setClassYear(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:bg-white focus:ring-2 focus:ring-hopkins-spirit outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Major / Department
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Biomedical Engineering"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:bg-white focus:ring-2 focus:ring-hopkins-spirit outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Campus
                  </label>
                  <select
                    value={campus}
                    onChange={(e) => setCampus(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:bg-white focus:ring-2 focus:ring-hopkins-spirit outline-none"
                  >
                    <option value="Homewood">Homewood (Arts, Sci, Eng)</option>
                    <option value="Peabody">Peabody Conservatory</option>
                    <option value="East Baltimore / Med">East Baltimore / Med</option>
                    <option value="Carey Harbor East">Carey Business (Harbor East)</option>
                  </select>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 min-h-[48px] bg-hopkins-heritage hover:bg-hopkins-deep text-white font-extrabold rounded-2xl flex items-center justify-center space-x-2 shadow-md transition-all mt-2"
              >
                <span>Send 6-Digit Verification Code</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Quick Demo Pre-sets */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2 text-center">
                  Or 1-Click Fast Verify with Demo Student Profile
                </span>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => loginWithDemoStudent('homewood')}
                    className="p-2 sm:p-2.5 rounded-xl border border-sky-200 bg-sky-50/60 hover:bg-sky-100 text-hopkins-deep font-bold text-center transition-colors min-h-[44px]"
                  >
                    <span className="block text-base">🐦</span>
                    <span className="truncate block mt-0.5 text-[10px] sm:text-[11px]">Homewood</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => loginWithDemoStudent('peabody')}
                    className="p-2 sm:p-2.5 rounded-xl border border-amber-200 bg-amber-50/60 hover:bg-amber-100 text-amber-900 font-bold text-center transition-colors min-h-[44px]"
                  >
                    <span className="block text-base">🎻</span>
                    <span className="truncate block mt-0.5 text-[10px] sm:text-[11px]">Peabody</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => loginWithDemoStudent('med')}
                    className="p-2 sm:p-2.5 rounded-xl border border-rose-200 bg-rose-50/60 hover:bg-rose-100 text-rose-900 font-bold text-center transition-colors min-h-[44px]"
                  >
                    <span className="block text-base">🔬</span>
                    <span className="truncate block mt-0.5 text-[10px] sm:text-[11px]">Med</span>
                  </button>
                </div>
              </div>

            </form>
          )}

          {/* STEP 2: Enter 6-Digit Verification Code */}
          {step === 'verify' && (
            <form onSubmit={handleSubmitVerification} className="space-y-5">
              
              {/* Simulated Hopkins MFA Dispatch Alert */}
              {verificationNotice && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-50 border border-sky-200 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-hopkins-heritage font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Hopkins MFA Code Dispatched</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleAutofillCode}
                      className="px-2.5 py-1 bg-hopkins-heritage text-white font-black text-[10px] rounded-lg shadow-sm hover:bg-hopkins-deep min-h-[30px]"
                    >
                      Autofill Code
                    </button>
                  </div>
                  <p className="text-slate-600 mt-1">
                    Sent to <strong className="text-slate-900">{verificationNotice.recipient}</strong>.
                  </p>
                  <div className="mt-2 text-[11px] font-mono bg-white px-2.5 py-1.5 rounded-lg border border-sky-200 text-slate-800 flex items-center justify-between">
                    <span>Generated Code:</span>
                    <span className="font-black text-hopkins-heritage tracking-wider text-sm">
                      {verificationNotice.code}
                    </span>
                  </div>
                </div>
              )}

              <div className="text-center">
                <label className="block text-xs font-bold text-slate-700 mb-3">
                  Enter the 6-Digit Verification Code:
                </label>

                {/* 6 Digit Input Boxes */}
                <div className="flex justify-center gap-1.5 sm:gap-3">
                  {codeDigits.map((digit, index) => (
                    <input
                      key={index}
                      id={`digit-input-${index}`}
                      type="text"
                      maxLength={1}
                      inputMode="numeric"
                      value={digit}
                      onChange={(e) => handleDigitChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-mono font-black bg-slate-50 border-2 border-slate-200 focus:border-hopkins-spirit rounded-xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-100 transition-all text-slate-900"
                    />
                  ))}
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Verify Button */}
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-3.5 px-4 min-h-[48px] bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-2xl flex items-center justify-center space-x-2 shadow-lg transition-all"
              >
                {isVerifying ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    <span>Verify & Authenticate J-Card</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep('credentials')}
                  className="text-hopkins-heritage font-semibold hover:underline"
                >
                  &larr; Change Email / Info
                </button>

                <button
                  type="button"
                  onClick={() => requestVerificationCode(identifier)}
                  className="text-slate-600 hover:text-slate-900 font-semibold"
                >
                  Resend Code
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
