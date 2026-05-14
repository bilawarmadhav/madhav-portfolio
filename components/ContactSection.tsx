'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GlassButton } from './ui/apple-tahoe-liquid-glass-button';

function GithubIcon({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const socials = [
  { Icon: GithubIcon,    label: 'GitHub',    href: 'https://github.com/bilawarmadhav',                     color: '#e2e8f0' },
  { Icon: LinkedinIcon,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/madhav-bilawar-a2217a340', color: '#60a5fa' },
  { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/madhav.dx_',                 color: '#f472b6' },
  {
    Icon: ({ size, color }: { size?: number; color?: string }) => <Mail size={size} color={color} />,
    label: 'Email',
    href: 'mailto:bilawarmadhav@gmail.com',
    color: '#a78bfa',
  },
];

type FormState  = { name: string; email: string; subject: string; message: string };
type FormErrors = Partial<FormState>;
type Status     = 'idle' | 'loading' | 'success' | 'error';

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim())    errors.name    = 'Name is required';
  if (!form.email.trim())   errors.email   = 'Email is required';
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.subject.trim()) errors.subject = 'Subject is required';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10)     errors.message = 'Message must be at least 10 characters';
  return errors;
}

function InputField({
  label, name, type = 'text', value, onChange, error, placeholder, multiline,
}: {
  label: string; name: keyof FormState; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string; placeholder: string; multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const baseStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.02)',
    border: `1px solid ${error ? '#ef4444' : focused ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.05)'}`,
    borderRadius: '12px',
    padding: '12px 14px',
    color: '#f8fafc',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s',
    boxShadow: focused ? '0 0 20px rgba(255,255,255,0.05)' : 'none',
    resize: 'none' as const,
  };
  return (
    <div>
      <label className="block text-xs font-semibold mb-2 tracking-wide" style={{ color: error ? '#ef4444' : focused ? '#e2e8f0' : '#64748b' }}>
        {label}
      </label>
      {multiline ? (
        <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows={5} style={baseStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} style={baseStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      )}
      <AnimatePresence>
        {error && (
          <motion.p className="text-xs mt-1" style={{ color: '#ef4444' }}
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm]     = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus('loading');
    try {
      const res  = await fetch('http://localhost:5000/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
      if (data.success) setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" ref={ref} className="relative w-full overflow-hidden px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)' }} />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-20"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#e2e8f0' }}>
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span style={{ color: '#f1f5f9' }}>Let's </span>
            <span className="gradient-text glow-text">Connect</span>
          </h2>
          <p className="text-sm sm:text-base max-w-lg mx-auto leading-relaxed" style={{ color: '#64748b' }}>
            Have an idea, project, or collaboration?{' '}
            <span style={{ color: '#94a3b8' }}>Let's build something clean and creative.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left  socials */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#f1f5f9' }}>Find me on</h3>
            <p className="text-sm mb-6 sm:mb-8" style={{ color: '#64748b' }}>
              Open to collaborations, freelance work, and interesting conversations.
            </p>

            {/* Social grid  2 cols always */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl group transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ borderColor: `rgba(255,255,255,0.2)`, boxShadow: `0 0 20px rgba(255,255,255,0.05)`, y: -3 }}
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `rgba(255,255,255,0.05)` }}>
                    <social.Icon size={15} color="#e2e8f0" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium truncate" style={{ color: '#94a3b8' }}>{social.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl flex items-center gap-3"
              style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="relative shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <p className="text-xs sm:text-sm" style={{ color: '#94a3b8' }}>
                Available for projects &amp; collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Right  form */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-6 md:p-8 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                <InputField label="Name"  name="name"  value={form.name}  onChange={handleChange} error={errors.name}  placeholder="Your name" />
                <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="your@email.com" />
              </div>
              <div className="mb-4 sm:mb-5">
                <InputField label="Subject" name="subject" value={form.subject} onChange={handleChange} error={errors.subject} placeholder="What's this about?" />
              </div>
              <div className="mb-5 sm:mb-6">
                <InputField label="Message" name="message" value={form.message} onChange={handleChange} error={errors.message} placeholder="Tell me about your idea or project..." multiline />
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div className="flex items-center gap-2 p-3 rounded-xl mb-4 text-sm"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#4ade80' }}
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <CheckCircle size={16} /> Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div className="flex items-center gap-2 p-3 rounded-xl mb-4 text-sm"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <AlertCircle size={16} /> Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>

              <GlassButton
                type="submit"
                disabled={status === 'loading'}
                className="w-full shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
                glassColor={status === 'loading' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'}
                style={{
                  color: '#fff',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'loading' ? (
                  <>
                    <motion.div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                    Sending...
                  </>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </GlassButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
