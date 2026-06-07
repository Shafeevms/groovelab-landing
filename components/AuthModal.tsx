"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import Modal from './Modal';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const { t } = useLanguage();
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);

  // Form state (fake)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('student');
    setLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API
    setTimeout(() => {
      setLoading(false);
      
      if (mode === 'login') {
        toast.success('Welcome back to GrooveLab!', { 
          description: 'You are now signed in.',
        });
      } else {
        const roleText = role === 'teacher' ? 'teacher account' : 'student account';
        toast.success(`Account created successfully!`, { 
          description: `Welcome aboard. Your ${roleText} is ready.`,
        });
      }
      
      handleClose();
    }, 620);
  };

  const switchMode = () => {
    const newMode = mode === 'login' ? 'signup' : 'login';
    setMode(newMode);
    resetForm();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {mode === 'login' ? (
        <>
          <div className="mb-8">
            <div className="text-3xl tracking-tight font-semibold mb-2">{t.modal.login.title}</div>
            <div className="text-[#a1a1aa]">{t.modal.login.subtitle}</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs tracking-wide mb-2 text-[#71717a]">{t.modal.login.email}</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#111] border border-[#262626] focus:border-[#3f3f46] rounded-2xl px-5 py-3 text-sm placeholder:text-[#52525b] outline-none" 
                placeholder="you@drums.com" 
              />
            </div>
            <div>
              <label className="block text-xs tracking-wide mb-2 text-[#71717a]">{t.modal.login.password}</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#111] border border-[#262626] focus:border-[#3f3f46] rounded-2xl px-5 py-3 text-sm placeholder:text-[#52525b] outline-none" 
                placeholder="••••••••" 
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary w-full py-[17px] rounded-2xl font-semibold text-sm tracking-wide mt-2 disabled:opacity-80"
            >
              {loading ? "..." : t.modal.login.submit}
            </button>
          </form>

          <div className="mt-7 text-sm text-center text-[#71717a]">
            {t.modal.login.noAccount}{' '}
            <button onClick={switchMode} className="text-[#a3e635] hover:underline font-medium">{t.modal.login.switchToSignup}</button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-8">
            <div className="text-3xl tracking-tight font-semibold mb-2">{t.modal.signup.title}</div>
            <div className="text-[#a1a1aa]">{t.modal.signup.subtitle}</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs tracking-wide mb-2 text-[#71717a]">{t.modal.signup.name}</label>
              <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#111] border border-[#262626] focus:border-[#3f3f46] rounded-2xl px-5 py-3 text-sm placeholder:text-[#52525b] outline-none" 
                placeholder="Alex Rivera" 
              />
            </div>
            <div>
              <label className="block text-xs tracking-wide mb-2 text-[#71717a]">{t.modal.signup.email}</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#111] border border-[#262626] focus:border-[#3f3f46] rounded-2xl px-5 py-3 text-sm placeholder:text-[#52525b] outline-none" 
                placeholder="you@drums.com" 
              />
            </div>
            <div>
              <label className="block text-xs tracking-wide mb-2 text-[#71717a]">{t.modal.signup.password}</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#111] border border-[#262626] focus:border-[#3f3f46] rounded-2xl px-5 py-3 text-sm placeholder:text-[#52525b] outline-none" 
                placeholder="••••••••" 
              />
            </div>

            <div>
              <label className="block text-xs tracking-wide mb-2 text-[#71717a]">{t.modal.signup.role}</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`flex-1 py-3 text-sm font-medium rounded-2xl border transition-all ${role === 'student' ? 'border-[#a3e635] bg-[#a3e635] text-black' : 'border-[#262626] hover:border-[#3f3f46]'}`}
                >
                  {t.modal.signup.roleStudent}
                </button>
                <button
                  type="button"
                  onClick={() => setRole('teacher')}
                  className={`flex-1 py-3 text-sm font-medium rounded-2xl border transition-all ${role === 'teacher' ? 'border-[#a3e635] bg-[#a3e635] text-black' : 'border-[#262626] hover:border-[#3f3f46]'}`}
                >
                  {t.modal.signup.roleTeacher}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary w-full py-[17px] rounded-2xl font-semibold text-sm tracking-wide mt-2 disabled:opacity-80"
            >
              {loading ? "..." : t.modal.signup.submit}
            </button>
          </form>

          <div className="mt-7 text-sm text-center text-[#71717a]">
            {t.modal.signup.haveAccount}{' '}
            <button onClick={switchMode} className="text-[#a3e635] hover:underline font-medium">{t.modal.signup.switchToLogin}</button>
          </div>
        </>
      )}
    </Modal>
  );
}
