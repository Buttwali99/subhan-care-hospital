import React, { useState } from 'react';

// Premium Medical Caduceus Icon Logo Component
const MedicalLogo = () => (
  <svg className="w-10 h-10 text-teal-600 flex-shrink-0 transition-transform duration-500 hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v16m0 0a2 2 0 100 4 2 2 0 000-4M12 5c-2.5-1.5-5 0-5 2.5s2.5 4 5 5m0-7.5c2.5-1.5 5 0 5 2.5s-2.5 4-5 5M6 8.5c0-1.5 1.5-2.5 3-2.5m6 2.5c0-1.5-1.5-2.5-3-2.5" />
    <path d="M4 12h3m10 0h3M12 8v4" strokeWidth={2} strokeLinecap="round"/>
    <rect x="9.5" y="14" width="5" height="4" rx="1" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

// High-fidelity UI Icon Vectors
const UIListIcons = {
  Search: () => (
    <svg className="w-4 h-4 text-slate-400 group-focus-within:text-teal-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
  ),
  Plus: () => (
    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
  Trash: () => (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  )
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Changed initial state to 'Dashboard'
  const [activeRole, setActiveRole] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const [patientsList, setPatientsList] = useState([
    { id: 'PT-101', name: 'Muhammad Ali', age: 24, contact: '0300-1234567', bloodGroup: 'O+', department: 'Cardiology', condition: 'Stable' },
    { id: 'PT-102', name: 'Zainab Bibi', age: 45, contact: '0321-7654321', bloodGroup: 'A-', department: 'Pediatrics', condition: 'Under Observation' },
    { id: 'PT-103', name: 'Maham Ali', age: 19, contact: '0333-9876543', bloodGroup: 'B+', department: 'Neurology', condition: 'Critical' },
  ]);

  const [doctorsList, setDoctorsList] = useState([
    { id: 'DOC-201', name: 'Dr. Hamza Shah', specialization: 'Cardiology', ward: 'ICU Block A', contact: '0301-4445555', availability: 'Available' },
    { id: 'DOC-202', name: 'Dr. Ayesha Khan', specialization: 'Pediatrics', ward: 'OPD Clinic 3', contact: '0312-3332221', availability: 'On Break' },
    { id: 'DOC-203', name: 'Dr. Bilal Ahmed', specialization: 'Neurology', ward: 'Emergency Wing', contact: '0345-9998887', availability: 'In Surgery' },
  ]);

  const [staffList, setStaffList] = useState([
    { id: 'STF-301', name: 'Asim Riaz', designation: 'Senior Nurse', shift: 'Morning Shift', sector: 'General ICU' },
    { id: 'STF-302', name: 'Sana Fatima', designation: 'Front Desk Lead', shift: 'Evening Shift', sector: 'Reception Terminal' },
    { id: 'STF-303', name: 'Kamran Lodhi', designation: 'Lab Technician', shift: 'Night Shift', sector: 'Pathology Lab' },
  ]);

  const [systemLogs] = useState([
    { id: 'LOG-88', event: 'Database Backup Completed Successfully', operator: 'System Cron Node', level: 'Info', time: '12:40 PM' },
    { id: 'LOG-89', event: 'New Doctor Profile Created: Dr. Hamza Shah', operator: 'Admin Operator', level: 'Success', time: '11:15 AM' },
    { id: 'LOG-90', event: 'Security Credentials Policy Refreshed', operator: 'Wali', level: 'Warning', time: '09:00 AM' },
  ]);

  const [formInpName, setFormInpName] = useState('');
  const [formInpField2, setFormInpField2] = useState('');
  const [formInpField3, setFormInpField3] = useState('');
  const [formInpField4, setFormInpField4] = useState('O+');

  const removeDoctor = (id) => setDoctorsList(doctorsList.filter(doc => doc.id !== id));
  const removePatient = (id) => setPatientsList(patientsList.filter(pat => pat.id !== id));
  const removeStaff = (id) => setStaffList(staffList.filter(stf => stf.id !== id));

  const handleRoleChange = (roleNode) => {
    setActiveRole(roleNode);
    setSearchQuery('');
    setFormInpName('');
    setFormInpField2('');
    setFormInpField3('');
    setFormInpField4('O+');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formInpName.trim() || !formInpField2.trim() || !formInpField3.trim()) return;

    if (activeRole === 'Patient') {
      setPatientsList([{
        id: `PT-${Math.floor(100 + Math.random() * 900)}`,
        name: formInpName,
        age: parseInt(formInpField2) || 0,
        contact: formInpField3,
        bloodGroup: formInpField4,
        department: 'General Checkup',
        condition: 'Stable'
      }, ...patientsList]);
    } else if (activeRole === 'Doctor') {
      setDoctorsList([{
        id: `DOC-${Math.floor(200 + Math.random() * 900)}`,
        name: formInpName.startsWith('Dr.') ? formInpName : `Dr. ${formInpName}`,
        specialization: formInpField2,
        ward: formInpField3,
        contact: '0300-XXXXXXX',
        availability: 'Available'
      }, ...doctorsList]);
    } else if (activeRole === 'Receptionist') {
      setStaffList([{
        id: `STF-${Math.floor(300 + Math.random() * 900)}`,
        name: formInpName,
        designation: formInpField2,
        shift: formInpField3,
        sector: 'General Ward'
      }, ...staffList]);
    }

    setFormInpName(''); setFormInpField2(''); setFormInpField3('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setLoginError('Please supply operational access credentials.');
      return;
    }
    setLoginError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setActiveRole('Dashboard');
  };

  const nameQueryFilter = (item) => item.name?.toLowerCase().includes(searchQuery.toLowerCase());

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center p-4 font-sans antialiased">
        <div className="bg-white/95 backdrop-blur-md w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
          <div className="bg-gradient-to-r from-cyan-900 to-teal-900 p-8 text-center flex flex-col items-center relative">
            <div className="p-3.5 bg-white rounded-2xl shadow-xl mb-3 transform transition-transform duration-500 hover:rotate-6"><MedicalLogo /></div>
            <h2 className="text-2xl font-black tracking-tight text-white uppercase">Subhan Care</h2>
            <p className="text-cyan-200/80 text-xs font-bold tracking-widest uppercase mt-0.5">Clinical Terminal Gateway</p>
          </div>
          <form onSubmit={handleLoginSubmit} className="p-8 space-y-5">
            {loginError && <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl animate-bounce">⚠️ {loginError}</div>}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Operator Username</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center"><UIListIcons.User /></span>
                <input type="text" placeholder="e.g. Wali" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-slate-50 pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm outline-hidden focus:border-teal-600 focus:bg-white transition-all duration-300 text-slate-800 font-medium" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Access PIN Code</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center"><UIListIcons.Lock /></span>
                <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-50 pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm outline-hidden focus:border-teal-600 focus:bg-white transition-all duration-300 text-slate-800" />
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-black py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-xs uppercase tracking-widest transform active:scale-98">Sign In Terminal</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex antialiased transition-all duration-500">
      
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-10 shadow-xs">
        <div className="p-5 flex items-center space-x-3 border-b border-slate-100 cursor-pointer" onClick={() => handleRoleChange('Dashboard')}>
          <MedicalLogo />
          <div className="flex flex-col">
            <span className="text-base font-black text-cyan-900 uppercase tracking-tight">Subhan</span>
            <span className="text-lg font-black text-teal-600 uppercase tracking-tight leading-none">Care</span>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <div className="space-y-2">
            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3">System Hub</span>
            <button onClick={() => handleRoleChange('Dashboard')} className={`w-full flex items-center px-4 py-3.5 font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-xs transition-all ${
              activeRole === 'Dashboard' 
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white border-none' 
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}>
               Main Command Center
            </button>
            <div className="pt-2 space-y-1">
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3">Registries</span>
              {['Doctor', 'Patient', 'Receptionist', 'Admin'].map((role) => (
                <button key={role} onClick={() => handleRoleChange(role)} className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
                  activeRole === role ? 'bg-teal-50 text-teal-800 border-l-4 border-teal-600' : 'text-slate-600 hover:bg-slate-50'
                }`}>
                  {role === 'Receptionist' ? 'Reception Staff' : `${role} Unit`}
                </button>
              ))}
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-3 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl text-slate-500 hover:text-rose-700 font-bold transition-all duration-300 text-xs uppercase tracking-wider shadow-xs">
            <UIListIcons.Logout /> Clear Access Session
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        <header className="bg-gradient-to-r from-cyan-900 to-slate-900 px-8 py-4 flex items-center justify-between shadow-md sticky top-0 z-20">
          <div className="flex items-center space-x-2 bg-black/20 p-1.5 rounded-xl border border-white/5">
            {['Dashboard', 'Doctor', 'Patient', 'Receptionist', 'Admin'].map((roleNode) => (
              <button
                key={roleNode}
                onClick={() => handleRoleChange(roleNode)}
                className={`px-5 py-2.5 text-xs font-black tracking-wider uppercase rounded-lg transition-all duration-300 transform ${
                  activeRole === roleNode 
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md scale-102' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {roleNode}
              </button>
            ))}
          </div>
          <span className="text-[11px] font-bold text-cyan-200/80 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800 uppercase tracking-widest">Active: {activeRole} Portal</span>
        </header>

        <main className="p-8 max-w-7xl w-full mx-auto space-y-8 animate-fadeIn">
          
          {/* Welcome Announcement Bar */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center">
                System Operator: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-teal-600 ml-1.5 font-black">Wali</span>
              </h1>
              <p className="text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">Hospital Operational Terminal Gateway</p>
            </div>
            {activeRole !== 'Admin' && activeRole !== 'Dashboard' && (
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center"><UIListIcons.Search /></span>
                <input
                  type="text"
                  placeholder={`Search active ${activeRole}s...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-50 pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 placeholder-slate-400 outline-hidden w-64 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-100 transition-all duration-300"
                />
              </div>
            )}
          </div>

          {/* DYNAMIC WELCOME DASHBOARD SCREEN */}
          {activeRole === 'Dashboard' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Quick High-Level Summary Stat Counters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all group" onClick={() => setActiveRole('Doctor')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Active Medical Consultants</span>
                    <span className="text-2xl">🩺</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">{doctorsList.length}</h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2 group-hover:underline">Navigate to Physician Directory &rarr;</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all group" onClick={() => setActiveRole('Patient')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Currently Admitted Files</span>
                    <span className="text-2xl">🛌</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">{patientsList.length}</h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2 group-hover:underline">View Live Emergency Admissions &rarr;</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all group" onClick={() => setActiveRole('Receptionist')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Support Staff Allocation</span>
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">{staffList.length}</h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2 group-hover:underline">Review Active Shift Rotations &rarr;</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Visual Section 1: Live Ongoing Hospital Metrics Feed */}
                <div className="lg:col-span-2 bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-6">
                  <div>
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight flex items-center">
                      <span className="mr-2 text-teal-600 animate-pulse">●</span> Live Hospital Setup Overview
                    </h3>
                    <p className="text-xs text-slate-400">Current active operations at Subhan Care clinical wings.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-rose-50 text-rose-600 font-bold rounded-lg text-sm">❤️</div>
                        <div>
                          <h4 className="text-sm font-black text-slate-900">Critical Care Occupancy</h4>
                          <p className="text-xs text-slate-400">Emergency & Cardiology Wards</p>
                        </div>
                      </div>
                      <span className="text-xs font-black bg-rose-100 text-rose-700 px-3 py-1 rounded-md">84% Capacity</span>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-emerald-50 text-emerald-600 font-bold rounded-lg text-sm">🧪</div>
                        <div>
                          <h4 className="text-sm font-black text-slate-900">Diagnostic Pathology Labs</h4>
                          <p className="text-xs text-slate-400">Automated Specimen Sorting Queue</p>
                        </div>
                      </div>
                      <span className="text-xs font-black bg-emerald-100 text-emerald-700 px-3 py-1 rounded-md">Fully Nominal</span>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-amber-50 text-amber-600 font-bold rounded-lg text-sm">⚡</div>
                        <div>
                          <h4 className="text-sm font-black text-slate-900">Outpatient (OPD) Status</h4>
                          <p className="text-xs text-slate-400">Average token processing timeframe</p>
                        </div>
                      </div>
                      <span className="text-xs font-black bg-amber-100 text-amber-700 px-3 py-1 rounded-md">~14 Mins Wait</span>
                    </div>
                  </div>
                </div>

                {/* Visual Section 2: Quick Action Quicklinks Menu */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Operator Actions</h3>
                      <p className="text-xs text-slate-400">Directly swap system data contexts.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      <button onClick={() => setActiveRole('Doctor')} className="w-full text-left p-3 hover:bg-slate-50 border border-slate-100 hover:border-slate-300 rounded-xl text-xs font-bold uppercase transition-all flex justify-between items-center group">
                        <span>➕ Register New Physician</span>
                        <span className="text-slate-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                      <button onClick={() => setActiveRole('Patient')} className="w-full text-left p-3 hover:bg-slate-50 border border-slate-100 hover:border-slate-300 rounded-xl text-xs font-bold uppercase transition-all flex justify-between items-center group">
                        <span>📝 Admit Emergency Patient</span>
                        <span className="text-slate-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                      <button onClick={() => setActiveRole('Receptionist')} className="w-full text-left p-3 hover:bg-slate-50 border border-slate-100 hover:border-slate-300 rounded-xl text-xs font-bold uppercase transition-all flex justify-between items-center group">
                        <span>⏰ Assign Shift Rosters</span>
                        <span className="text-slate-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-cyan-950 text-cyan-100 rounded-xl border border-cyan-900 text-xs text-center font-semibold">
                    🛡️ Secure administrative environment actively authenticated under operator profile logs.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* DOCTOR MODULE REGISTRY ENTRY */}
          {activeRole === 'Doctor' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 transform transition-all duration-300 hover:shadow-md">
                <div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Onboard Physician</h3>
                  <p className="text-xs text-slate-400">Add medical professional metadata to registry.</p>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Physician Name</label>
                    <input type="text" value={formInpName} onChange={(e) => setFormInpName(e.target.value)} placeholder="e.g. Dr. Hamza Shah" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Specialization Department</label>
                    <input type="text" value={formInpField2} onChange={(e) => setFormInpField2(e.target.value)} placeholder="e.g. Cardiology" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Assigned Wing Location</label>
                    <input type="text" value={formInpField3} onChange={(e) => setFormInpField3(e.target.value)} placeholder="e.g. ICU Wing A" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-teal-600 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-teal-700 transition-all shadow-xs"><UIListIcons.Plus /> Commit Registry Node</button>
                </form>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctorsList.filter(nameQueryFilter).map(doc => (
                  <div key={doc.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 group relative">
                    <button onClick={() => removeDoctor(doc.id)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all z-10" title="Remove Doctor">
                      <UIListIcons.Trash />
                    </button>
                    <div className="space-y-2 pr-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 bg-slate-100 rounded-md">{doc.id}</span>
                        <span className={`px-2 py-0.5 text-[10px] font-black uppercase rounded-md text-white ${doc.availability === 'Available' ? 'bg-emerald-600' : doc.availability === 'In Surgery' ? 'bg-rose-600' : 'bg-amber-500'}`}>{doc.availability}</span>
                      </div>
                      <h4 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">{doc.name}</h4>
                      <p className="text-xs font-bold text-slate-500 flex items-center">🩺 Specialty: <span className="text-slate-800 ml-1 font-medium">{doc.specialization}</span></p>
                      <p className="text-xs font-bold text-slate-500 flex items-center">📍 Station: <span className="text-slate-700 ml-1 font-mono">{doc.ward}</span></p>
                    </div>
                    <div className="border-t border-slate-100 pt-3 mt-4 text-[11px] text-slate-400 font-medium">System Registry Active row</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PATIENT MODULE REGISTRY ENTRY */}
          {activeRole === 'Patient' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 transform transition-all duration-300 hover:shadow-md">
                <div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Patient Intake Log</h3>
                  <p className="text-xs text-slate-400">Initialize a live frontend patient file tracker.</p>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Patient Full Name</label>
                    <input type="text" value={formInpName} onChange={(e) => setFormInpName(e.target.value)} placeholder="e.g. Ali Butt" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Age (Years)</label>
                      <input type="number" value={formInpField2} onChange={(e) => setFormInpField2(e.target.value)} placeholder="24" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Blood Group</label>
                      <select value={formInpField4} onChange={(e) => setFormInpField4(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                        {['O+', 'O-', 'A+', 'A-', 'B+', 'AB+'].map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Emergency Contact Cell</label>
                    <input type="text" value={formInpField3} onChange={(e) => setFormInpField3(e.target.value)} placeholder="e.g. 0300-1234567" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-cyan-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-cyan-900 transition-all shadow-xs"><UIListIcons.Plus /> Register File</button>
                </form>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {patientsList.filter(nameQueryFilter).map(pat => (
                  <div key={pat.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 group relative">
                    <button onClick={() => removePatient(pat.id)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all z-10" title="Discharge Patient">
                      <UIListIcons.Trash />
                    </button>
                    <div className="space-y-3 pr-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 bg-slate-100 rounded-md">{pat.id}</span>
                        <span className={`px-2 py-0.5 rounded-sm text-[10px] font-black uppercase text-white ${pat.condition === 'Critical' ? 'bg-rose-600' : pat.condition === 'Stable' ? 'bg-emerald-600' : 'bg-amber-500'}`}>{pat.condition}</span>
                      </div>
                      <h4 className="text-base font-black text-slate-900 group-hover:text-cyan-800 transition-colors">{pat.name}</h4>
                      <div className="grid grid-cols-2 gap-2 border-t border-b border-slate-100 py-2.5 my-2 text-xs font-semibold text-slate-500">
                        <div>Age: <span className="text-slate-800 font-medium">{pat.age}</span></div>
                        <div>Blood: <span className="text-rose-600 font-black">{pat.bloodGroup}</span></div>
                      </div>
                      <p className="text-xs font-bold text-slate-500">📞 Contact: <span className="text-slate-800 font-mono font-medium">{pat.contact}</span></p>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-4 font-bold uppercase tracking-wider">Unit Allocation: {pat.department}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RECEPTIONIST MODULE REGISTRY ENTRY */}
          {activeRole === 'Receptionist' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 transform transition-all duration-300 hover:shadow-md">
                <div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Onboard Support Staff</h3>
                  <p className="text-xs text-slate-400">Log internal clinical personnel files.</p>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Employee Full Name</label>
                    <input type="text" value={formInpName} onChange={(e) => setFormInpName(e.target.value)} placeholder="e.g. Sana Fatima" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Operational Designation</label>
                    <input type="text" value={formInpField2} onChange={(e) => setFormInpField2(e.target.value)} placeholder="e.g. Lead Nurse / Front Desk" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Assigned Shift Rotation</label>
                    <input type="text" value={formInpField3} onChange={(e) => setFormInpField3(e.target.value)} placeholder="e.g. Morning Shift" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-slate-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-slate-900 transition-all shadow-xs"><UIListIcons.Plus /> Allocate Entry</button>
                </form>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {staffList.filter(nameQueryFilter).map(stf => (
                  <div key={stf.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative group">
                    <button onClick={() => removeStaff(stf.id)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all z-10" title="Remove Staff Member">
                      <UIListIcons.Trash />
                    </button>
                    <div className="space-y-2 pr-6">
                      <span className="text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 bg-slate-100 rounded-md self-start inline-block">{stf.id}</span>
                      <h4 className="text-base font-black text-slate-900">{stf.name}</h4>
                      <p className="text-xs font-bold text-slate-500">💼 Role: <span className="text-teal-800 font-bold">{stf.designation}</span></p>
                      <p className="text-xs font-bold text-slate-500">🕒 Shift: <span className="text-slate-800 font-medium">{stf.shift}</span></p>
                    </div>
                    <div className="border-t border-slate-100 pt-2.5 mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Sector Focus: {stf.sector}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADMINISTRATIVE SYSTEM AUDIT TRACK */}
          {activeRole === 'Admin' && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">System Node Action Logs</h3>
              </div>
              <div className="divide-y divide-slate-100 font-mono text-xs">
                {systemLogs.map(log => (
                  <div key={log.id} className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-slate-50/80 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase text-white ${
                        log.level === 'Success' ? 'bg-emerald-600' : log.level === 'Warning' ? 'bg-amber-500' : 'bg-blue-600'
                      }`}>{log.level}</span>
                      <span className="text-slate-400 font-bold">{log.id}</span>
                      <p className="text-slate-700 font-medium">{log.event}</p>
                    </div>
                    <div className="text-right text-[11px] text-slate-400 font-semibold sm:pl-4">
                      <span>{log.operator}</span> &bull; <span>{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}