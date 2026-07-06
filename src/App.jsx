import React, { useState } from 'react';

// Custom Medical Caduceus + Hospital Icon Logo
const MedicalLogo = () => (
  <svg className="w-12 h-12 text-teal-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v16m0 0a2 2 0 100 4 2 2 0 000-4M12 5c-2.5-1.5-5 0-5 2.5s2.5 4 5 5m0-7.5c2.5-1.5 5 0 5 2.5s-2.5 4-5 5M6 8.5c0-1.5 1.5-2.5 3-2.5m6 2.5c0-1.5-1.5-2.5-3-2.5" />
    <path d="M4 12h3m10 0h3M12 8v4" strokeWidth={2} strokeLinecap="round"/>
    <rect x="9.5" y="14" width="5" height="4" rx="1" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

// High-fidelity UI outline icon primitives
const UIListIcons = {
  Dashboard: () => (
    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Search: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Revenue: () => (
    <svg className="w-12 h-12 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Doctor: () => (
    <svg className="w-12 h-12 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Logs: () => (
    <svg className="w-12 h-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  Lock: () => (
    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  User: () => (
    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Logout: () => (
    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  )
};

export default function App() {
  // Authentication & View Management States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [role, setRole] = useState('Admin');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock schedule dataset
  const appointmentsData = [
    { id: 'APT-01', name: 'Muhammad Ali', header: 'Appointment', start: '8:00 AM 2026', time: '12:00 PM', checkIn: 'Checked In', status: 'Completed' },
    { id: 'APT-02', name: 'Zainab Bibi', header: 'Appointment', start: '8:00 AM 2026', time: '12:00 PM', checkIn: 'Waiting', status: 'Completed' },
    { id: 'APT-03', name: 'Maham Ali', header: 'Appointment', start: '8:00 AM 2026', time: '12:00 PM', checkIn: 'In Consultation', status: 'Completed' },
    { id: 'APT-04', name: 'Radre Ida', header: 'Appointment', start: '8:00 AM 2026', time: '07:00 AM', checkIn: 'In Consultation', status: 'Completed' },
    { id: 'APT-05', name: 'Sanan Ehom', header: 'Appointment', start: '6:30 AM 2026', time: '12:00 AM', checkIn: 'Checked In', status: 'Completed' }
  ];

  // Pipeline querying filter
  const filteredAppointments = appointmentsData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.checkIn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Authentication Submission Handler
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setLoginError('Please supply all required authentication credentials.');
      return;
    }
    // Accept simple demo authorization pass
    setLoginError('');
    setIsLoggedIn(true);
  };

  // Logout reset handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  // ================= RENDER INTERCEPT: LOGIN SCREEN LAYER =================
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans antialiased">
        <div className="bg-white w-full max-w-md rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Banner Accent */}
          <div className="bg-cyan-900 p-8 text-center flex flex-col items-center">
            <div className="p-3 bg-white rounded-2xl shadow-md mb-3">
              <MedicalLogo />
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white uppercase">Subhan Care</h2>
            <p className="text-cyan-200/80 text-xs font-bold tracking-widest uppercase mt-0.5">Clinical Access Terminal</p>
          </div>

          {/* Form Area */}
          <form onSubmit={handleLoginSubmit} className="p-8 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Secure System Authentication</h3>
              <p className="text-xs text-slate-400 mt-0.5">Enter credentials to initialize operational dashboard.</p>
            </div>

            {loginError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl">
                ⚠️ {loginError}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Username / Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center"><UIListIcons.User /></span>
                <input
                  type="text"
                  placeholder="e.g. administrator"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-50 pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm outline-hidden focus:border-teal-600 focus:bg-white transition-all text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center"><UIListIcons.Lock /></span>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm outline-hidden focus:border-teal-600 focus:bg-white transition-all text-slate-800"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-teal-600 hover:bg-teal-700 active:scale-[0.99] text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-teal-600/10 transition-all text-sm uppercase tracking-wider"
            >
              Sign In to Environment
            </button>
            
            <div className="text-center pt-2">
              <span className="text-[11px] font-medium text-slate-400">Authorized Personnel System Nodes Only</span>
            </div>
          </form>

        </div>
      </div>
    );
  }

  // ================= MAIN APPARATUS DASHBOARD LAYER =================
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex antialiased animate-in fade-in duration-300">
      
      {/* LEFT HAND CLINICAL SIDEBAR PLATFORM */}
      <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col flex-shrink-0">
        {/* Logo and Name Frame */}
        <div className="p-5 flex items-center space-x-3 border-b border-slate-100">
          <MedicalLogo />
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight text-cyan-900 uppercase leading-tight">Subhan</span>
            <span className="text-lg font-black tracking-tight text-emerald-700 uppercase leading-none">Care</span>
            <span className="text-xs font-bold tracking-wider text-slate-400 mt-0.5 uppercase">Hospital</span>
          </div>
        </div>

        {/* Navigation Menu with Logout Option at Bottom */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <nav className="space-y-1">
            <button className="w-full flex items-center px-4 py-3 bg-blue-100/70 text-cyan-900 font-bold rounded-xl border border-blue-200/40 transition-all text-sm">
              <UIListIcons.Dashboard />
              Dashboard Workspace
            </button>
          </nav>
          
          {/* Sign Out Trigger Anchor */}
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl text-slate-600 hover:text-rose-700 font-bold transition-all text-sm"
          >
            <UIListIcons.Logout />
            Sign Out Terminal
          </button>
        </div>
      </aside>

      {/* RIGHT HAND CONTENT VIEWPORT LAYER */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* TOP INTERACTIVE TEAL BAR CONTROL SYSTEM */}
        <header className="bg-cyan-900 px-8 py-4 flex items-center justify-between border-b border-cyan-950">
          <div className="flex items-center space-x-4">
            {['Admin', 'Doctor', 'Patient', 'Receptionist'].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  role === r 
                    ? 'bg-emerald-200/90 text-cyan-950 font-bold shadow-xs' 
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center text-xs font-semibold text-emerald-300 bg-cyan-950 px-3 py-1.5 rounded-lg border border-cyan-800">
            🟢 Local Workspace Node Active
          </div>
        </header>

        {/* CONTAINER VIEWPORT WORKSPACE */}
        <main className="p-8 max-w-7xl w-full mx-auto space-y-6">
          
          {/* USER WELCOME & OMNIBOX ROW CONTROL */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Welcome back, <span className="text-cyan-900">Wali</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-sm">
                <span className="text-slate-400 font-medium">Active Interface:</span>
                <select 
                  value={role} 
                  onChange={(e) => setRole(e.target.value)}
                  className="bg-transparent font-bold text-slate-700 outline-hidden cursor-pointer focus:ring-0"
                >
                  <option value="Admin">Admin</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Receptionist">Receptionist</option>
                </select>
              </div>

              {/* Dynamic Search */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Filter records..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white pl-4 pr-10 py-2 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600/20 w-48 sm:w-64 transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center bg-teal-600 text-white rounded-r-xl px-2.5 my-[1px]">
                  <UIListIcons.Search />
                </div>
              </div>
            </div>
          </div>

          {/* ================= ADMIN CONSOLE LAYER ================= */}
          {role === 'Admin' && (
            <>
              {/* Stat Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between group hover:border-teal-500/40 transition-all">
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-slate-500 tracking-tight">Total Revenue</span>
                    <p className="text-3xl font-black text-slate-900 tracking-tight">$30,000</p>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-cyan-50 transition-colors"><UIListIcons.Revenue /></div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between group hover:border-teal-500/40 transition-all">
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-slate-500 tracking-tight">Active Doctors</span>
                    <p className="text-3xl font-black text-slate-900 tracking-tight">18</p>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-teal-50 transition-colors"><UIListIcons.Doctor /></div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between group hover:border-teal-500/40 transition-all">
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-slate-500 tracking-tight">System Logs</span>
                    <p className="text-3xl font-black text-slate-900 tracking-tight">25</p>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors"><UIListIcons.Logs /></div>
                </div>
              </div>

              {/* Master Data Schedule Table Module */}
              <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xs overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                  <h2 className="text-lg font-black text-slate-900 tracking-tight">Master Clinical Schedule</h2>
                  <p className="text-xs font-bold text-slate-400 uppercase mt-0.5 tracking-wider">Active Patient Records</p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-cyan-800 text-white text-xs font-bold uppercase tracking-wider">
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Header</th>
                        <th className="py-3 px-6">Start</th>
                        <th className="py-3 px-6">Date & Time</th>
                        <th className="py-3 px-6">Check In Status</th>
                        <th className="py-3 px-6">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                      {filteredAppointments.length > 0 ? (
                        filteredAppointments.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-3.5 px-6 font-semibold text-slate-900">{item.name}</td>
                            <td className="py-3.5 px-6 text-slate-500">{item.header}</td>
                            <td className="py-3.5 px-6 text-slate-500">{item.start}</td>
                            <td className="py-3.5 px-6 text-slate-600">{item.time}</td>
                            <td className="py-3.5 px-6">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                                item.checkIn === 'Checked In' ? 'bg-emerald-700 text-white' :
                                item.checkIn === 'Waiting' ? 'bg-amber-600 text-white' : 'bg-blue-600 text-white'
                              }`}>
                                {item.checkIn === 'Checked In' && '✓ '}
                                {item.checkIn === 'Waiting' && '⏳ '}
                                {item.checkIn === 'In Consultation' && '👤 '}
                                {item.checkIn}
                              </span>
                            </td>
                            <td className="py-3.5 px-6">
                              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-slate-500 text-white">
                                ✓ {item.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="py-10 text-center text-slate-400 font-medium">
                            No matching medical logs match: "{searchQuery}"
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* FALLBACK PANEL VIEW REVISIONS FOR OTHER ROLES */}
          {role !== 'Admin' && (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 max-w-xl mx-auto shadow-xs">
              <span className="text-4xl block mb-2">📋</span>
              <h3 className="text-lg font-bold text-slate-900">{role} Operations Module</h3>
              <p className="text-sm text-slate-400 mt-1">Telemetry node active. Input pipeline matches live filters.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}