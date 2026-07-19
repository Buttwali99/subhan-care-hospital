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
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Defaulted to true for runtime access
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [activeRole, setActiveRole] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  // Pre-loaded lists for core entities
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
  ]);

  const [appointments, setAppointments] = useState([
    { id: 'APT-901', patientName: 'Muhammad Ali', doctorName: 'Dr. Hamza Shah', date: '2026-07-15', time: '10:30 AM', status: 'Confirmed' },
    { id: 'APT-902', patientName: 'Zainab Bibi', doctorName: 'Dr. Ayesha Khan', date: '2026-07-15', time: '12:00 PM', status: 'Pending' },
    { id: 'APT-903', patientName: 'Maham Ali', doctorName: 'Dr. Bilal Ahmed', date: '2026-07-16', time: '03:15 PM', status: 'Completed' },
  ]);

  const [prescriptions, setPrescriptions] = useState([
    { id: 'RX-501', patientName: 'Muhammad Ali', doctorName: 'Dr. Hamza Shah', date: '2026-07-14', diagnosis: 'Hypertension Stage 1', meds: 'Lisinopril 10mg (1x daily), Aspirin 75mg (1x daily)' },
    { id: 'RX-502', patientName: 'Zainab Bibi', doctorName: 'Dr. Ayesha Khan', date: '2026-07-12', diagnosis: 'Seasonal Allergies', meds: 'Loratadine 10mg (At night), Fluticasone nasal spray (2 sprays/day)' }
  ]);

  const [medicalHistories, setMedicalHistories] = useState([
    { id: 'MH-701', patientName: 'Muhammad Ali', bloodGroup: 'O+', history: [
      { date: '2026-05-10', event: 'Emergency Room Admission', details: 'Acute chest pain. EKG results normal. Released after 12h observation.', doc: 'Dr. Hamza Shah' },
      { date: '2025-11-22', event: 'Orthopedic Surgery', details: 'Arthroscopy procedure on left knee meniscus. Healing optimal.', doc: 'Dr. Bilal Ahmed' }
    ]},
    { id: 'MH-702', patientName: 'Zainab Bibi', bloodGroup: 'A-', history: [
      { date: '2026-02-15', event: 'Pediatric Unit Consult', details: 'Allergic asthma follow-up. Prescribed standard rescue inhalers.', doc: 'Dr. Ayesha Khan' }
    ]}
  ]);

  const [inventory, setInventory] = useState([
    { id: 'INV-001', itemName: 'Paracetamol 500mg Tablets', category: 'Pharmacy', stock: 1200, unit: 'Tabs', threshold: 200, status: 'In Stock' },
    { id: 'INV-002', itemName: 'Sterile Syringes (5ml)', category: 'Disposables', stock: 150, unit: 'Pcs', threshold: 300, status: 'Low Stock' },
    { id: 'INV-003', itemName: 'Normal Saline IV Fluid (500ml)', category: 'Fluids', stock: 85, unit: 'Bottles', threshold: 50, status: 'In Stock' },
    { id: 'INV-004', itemName: 'Atropine Injection Amps', category: 'Emergency Meds', stock: 12, unit: 'Amps', threshold: 25, status: 'Critical Stock' },
  ]);

  const [billingList, setBillingList] = useState([
    { id: 'INV-8001', patientName: 'Muhammad Ali', date: '2026-07-14', total: 12500, discount: 1500, paidAmount: 11000, status: 'Paid', items: ['Cardiology Consult (Rs. 3000)', 'ECG Test Diagnostic (Rs. 4500)', 'Emergency Cardiac Medication (Rs. 5000)'] },
    { id: 'INV-8002', patientName: 'Zainab Bibi', date: '2026-07-13', total: 4500, discount: 0, paidAmount: 0, status: 'Unpaid', items: ['Pediatric Clinic General Visit (Rs. 2500)', 'Nebulization Therapy Session (Rs. 2000)'] }
  ]);

  // System Settings State
  const [settings, setSettings] = useState({
    hospitalName: 'Subhan Care Hospital',
    currency: 'Rs.',
    refreshInterval: 'Live Updates',
    backupFrequency: 'Daily Automatic',
    systemTheme: 'Light Minimalist',
    alertThreshold: 'Strict Notifications'
  });

  // Dynamic Forms Setup
  const [formInpName, setFormInpName] = useState('');
  const [formInpField2, setFormInpField2] = useState('');
  const [formInpField3, setFormInpField3] = useState('');
  const [formInpField4, setFormInpField4] = useState('O+');

  // Dynamic Sprint 3 Submissions States
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const [rxDiagnosis, setRxDiagnosis] = useState('');
  const [rxMeds, setRxMeds] = useState('');

  const [invItem, setInvItem] = useState('');
  const [invCat, setInvCat] = useState('Pharmacy');
  const [invQty, setInvQty] = useState('');
  const [invMin, setInvMin] = useState('');

  const [billPatient, setBillPatient] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [billItemsStr, setBillItemsStr] = useState('');

  // Delete Handlers
  const removeDoctor = (id) => setDoctorsList(doctorsList.filter(doc => doc.id !== id));
  const removePatient = (id) => setPatientsList(patientsList.filter(pat => pat.id !== id));
  const removeStaff = (id) => setStaffList(staffList.filter(stf => stf.id !== id));
  const removeAppointment = (id) => setAppointments(appointments.filter(apt => apt.id !== id));
  const removePrescription = (id) => setPrescriptions(prescriptions.filter(rx => rx.id !== id));
  const removeInventoryItem = (id) => setInventory(inventory.filter(inv => inv.id !== id));
  const removeInvoice = (id) => setBillingList(billingList.filter(bill => bill.id !== id));

  const handleRoleChange = (roleNode) => {
    setActiveRole(roleNode);
    setSearchQuery('');
    setFormInpName('');
    setFormInpField2('');
    setFormInpField3('');
    setFormInpField4('O+');
    setSelectedPatient('');
    setSelectedDoctor('');
    setAppointmentDate('');
    setAppointmentTime('');
    setRxDiagnosis('');
    setRxMeds('');
    setInvItem('');
    setInvQty('');
    setInvMin('');
    setBillPatient('');
    setBillAmount('');
    setBillItemsStr('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (activeRole === 'Patient') {
      if (!formInpName.trim()) return;
      setPatientsList([{
        id: `PT-${Math.floor(100 + Math.random() * 900)}`,
        name: formInpName,
        age: parseInt(formInpField2) || 22,
        contact: formInpField3 || '0300-XXXXXXX',
        bloodGroup: formInpField4,
        department: 'General Checkup',
        condition: 'Stable'
      }, ...patientsList]);
      setFormInpName(''); setFormInpField2(''); setFormInpField3('');
    }

    else if (activeRole === 'Doctor') {
      if (!formInpName.trim()) return;
      setDoctorsList([{
        id: `DOC-${Math.floor(200 + Math.random() * 900)}`,
        name: formInpName.startsWith('Dr.') ? formInpName : `Dr. ${formInpName}`,
        specialization: formInpField2 || 'General Medicine',
        ward: formInpField3 || 'OPD Ward',
        contact: '0300-XXXXXXX',
        availability: 'Available'
      }, ...doctorsList]);
      setFormInpName(''); setFormInpField2(''); setFormInpField3('');
    }

    else if (activeRole === 'Appointments') {
      if (!selectedPatient || !selectedDoctor || !appointmentDate || !appointmentTime) return;
      setAppointments([{
        id: `APT-${Math.floor(900 + Math.random() * 100)}`,
        patientName: selectedPatient,
        doctorName: selectedDoctor,
        date: appointmentDate,
        time: appointmentTime,
        status: 'Confirmed'
      }, ...appointments]);
      setSelectedPatient(''); setSelectedDoctor(''); setAppointmentDate(''); setAppointmentTime('');
    }

    else if (activeRole === 'Prescription') {
      if (!selectedPatient || !selectedDoctor || !rxDiagnosis || !rxMeds) return;
      setPrescriptions([{
        id: `RX-${Math.floor(500 + Math.random() * 100)}`,
        patientName: selectedPatient,
        doctorName: selectedDoctor,
        date: new Date().toISOString().split('T')[0],
        diagnosis: rxDiagnosis,
        meds: rxMeds
      }, ...prescriptions]);
      
      const patientHist = medicalHistories.find(h => h.patientName === selectedPatient);
      if (patientHist) {
        patientHist.history.unshift({
          date: new Date().toISOString().split('T')[0],
          event: `Consultation: ${rxDiagnosis}`,
          details: `Prescribed: ${rxMeds}`,
          doc: selectedDoctor
        });
        setMedicalHistories([...medicalHistories]);
      } else {
        setMedicalHistories([{
          id: `MH-${Math.floor(700 + Math.random() * 100)}`,
          patientName: selectedPatient,
          bloodGroup: 'O+',
          history: [{
            date: new Date().toISOString().split('T')[0],
            event: `Consultation: ${rxDiagnosis}`,
            details: `Prescribed: ${rxMeds}`,
            doc: selectedDoctor
          }]
        }, ...medicalHistories]);
      }
      setSelectedPatient(''); setSelectedDoctor(''); setRxDiagnosis(''); setRxMeds('');
    }

    else if (activeRole === 'Inventory') {
      if (!invItem || !invQty || !invMin) return;
      const qty = parseInt(invQty);
      const limit = parseInt(invMin);
      let stockStatus = 'In Stock';
      if (qty <= limit * 0.5) stockStatus = 'Critical Stock';
      else if (qty <= limit) stockStatus = 'Low Stock';

      setInventory([{
        id: `INV-${Math.floor(100 + Math.random() * 900)}`,
        itemName: invItem,
        category: invCat,
        stock: qty,
        unit: 'Units',
        threshold: limit,
        status: stockStatus
      }, ...inventory]);
      setInvItem(''); setInvQty(''); setInvMin('');
    }

    else if (activeRole === 'Billing') {
      if (!billPatient || !billAmount || !billItemsStr) return;
      const parsedAmt = parseFloat(billAmount);
      const itemsList = billItemsStr.split(',').map(item => item.trim());
      setBillingList([{
        id: `INV-${Math.floor(8000 + Math.random() * 900)}`,
        patientName: billPatient,
        date: new Date().toISOString().split('T')[0],
        total: parsedAmt,
        discount: 0,
        paidAmount: parsedAmt,
        status: 'Paid',
        items: itemsList
      }, ...billingList]);
      setBillPatient(''); setBillAmount(''); setBillItemsStr('');
    }
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

  const searchFilter = (fieldValue) => fieldValue?.toLowerCase().includes(searchQuery.toLowerCase());

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full border border-slate-100 space-y-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <MedicalLogo />
            <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Subhan Care Gateway</h2>
            <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">Authentication Protocol Required</p>
          </div>
          {loginError && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl text-center">
              {loginError}
            </div>
          )}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">Operator User ID</label>
              <input type="text" placeholder="e.g., Wali" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">Access Cipher Key</label>
              <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all">
              Initialize Portal Session
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex antialiased transition-all duration-500">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-10 shadow-xs">
        <div className="p-5 flex items-center space-x-3 border-b border-slate-100 cursor-pointer" onClick={() => handleRoleChange('Dashboard')}>
          <MedicalLogo />
          <div className="flex flex-col">
            <span className="text-base font-black text-cyan-900 uppercase tracking-tight">Subhan</span>
            <span className="text-lg font-black text-teal-600 uppercase tracking-tight leading-none">Care</span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col justify-between flex-1 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3">System Hub</span>
              <button onClick={() => handleRoleChange('Dashboard')} className={`mt-1.5 w-full flex items-center px-4 py-3 font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all ${
                activeRole === 'Dashboard' 
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md' 
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}>
                📊 Main Command Center
              </button>
            </div>

            {/* Core Clinical Workflow Modules */}
            <div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3">Clinical Workflow Modules</span>
              <div className="mt-1.5 space-y-1">
                {[
                  { name: 'Appointments', icon: '📅' },
                  { name: 'Prescription', icon: '📝' },
                  { name: 'Medical History', icon: '🩺' },
                  { name: 'Inventory', icon: '📦' },
                  { name: 'Billing', icon: '💳' },
                ].map((mod) => (
                  <button key={mod.name} onClick={() => handleRoleChange(mod.name)} className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase flex items-center space-x-2 transition-all ${
                    activeRole === mod.name ? 'bg-teal-50 text-teal-800 border-l-4 border-teal-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}>
                    <span>{mod.icon}</span>
                    <span>{mod.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Management & Administration Extensions */}
            <div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3">Analytics & Control</span>
              <div className="mt-1.5 space-y-1">
                {[
                  { name: 'Reports', icon: '📈' },
                  { name: 'Settings', icon: '⚙️' },
                ].map((adminMod) => (
                  <button key={adminMod.name} onClick={() => handleRoleChange(adminMod.name)} className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase flex items-center space-x-2 transition-all ${
                    activeRole === adminMod.name ? 'bg-cyan-50 text-cyan-800 border-l-4 border-cyan-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}>
                    <span>{adminMod.icon}</span>
                    <span>{adminMod.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3">Registries</span>
              <div className="mt-1.5 space-y-1">
                {['Doctor', 'Patient'].map((role) => (
                  <button key={role} onClick={() => handleRoleChange(role)} className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
                    activeRole === role ? 'bg-teal-50 text-teal-800 border-l-4 border-teal-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}>
                    {role} Unit
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <button onClick={handleLogout} className="mt-6 w-full flex items-center justify-center px-4 py-3 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl text-slate-500 hover:text-rose-700 font-bold transition-all duration-300 text-xs uppercase tracking-wider shadow-xs">
            <UIListIcons.Logout /> Clear Access Session
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Dynamic Navigation Header bar */}
        <header className="bg-gradient-to-r from-cyan-900 to-slate-900 px-8 py-4 flex items-center justify-between shadow-md sticky top-0 z-20">
          <div className="flex items-center space-x-2 bg-black/20 p-1.5 rounded-xl border border-white/5 overflow-x-auto max-w-full">
            {['Dashboard', 'Appointments', 'Prescription', 'Medical History', 'Inventory', 'Billing', 'Reports', 'Settings'].map((roleNode) => (
              <button
                key={roleNode}
                onClick={() => handleRoleChange(roleNode)}
                className={`px-4 py-2 text-xs font-black tracking-wider uppercase rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeRole === roleNode 
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {roleNode}
              </button>
            ))}
          </div>
          <span className="hidden md:inline-block text-[11px] font-bold text-cyan-200/80 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800 uppercase tracking-widest">Active: {activeRole} Hub</span>
        </header>

        <main className="p-8 max-w-7xl w-full mx-auto space-y-8">
          
          {/* Welcome Dashboard Ribbon */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center">
                System Operator: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-teal-600 ml-1.5 font-black">Wali</span>
              </h1>
              <p className="text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">{settings.hospitalName} &bull; Environment Live</p>
            </div>
            {activeRole !== 'Dashboard' && activeRole !== 'Medical History' && activeRole !== 'Settings' && activeRole !== 'Reports' && (
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center"><UIListIcons.Search /></span>
                <input
                  type="text"
                  placeholder={`Search in ${activeRole}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-50 pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 placeholder-slate-400 outline-hidden w-64 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-100 transition-all duration-300"
                />
              </div>
            )}
          </div>

          {/* DASHBOARD MODULE */}
          {activeRole === 'Dashboard' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveRole('Appointments')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Slots Locked</span>
                    <span className="text-xl">📅</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">{appointments.length} Active</h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2">Manage clinical schedule &rarr;</p>
                </div>

                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveRole('Prescription')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Rx Issued</span>
                    <span className="text-xl">📝</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">{prescriptions.length} Records</h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2">Issue patient prescription pad &rarr;</p>
                </div>

                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveRole('Inventory')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Supply Alerts</span>
                    <span className="text-xl">📦</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">
                    {inventory.filter(i => i.status !== 'In Stock').length} Critical
                  </h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2">Review stock levels &rarr;</p>
                </div>

                <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveRole('Billing')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Gross Invoice</span>
                    <span className="text-xl">💳</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">
                    {settings.currency} {billingList.reduce((acc, curr) => acc + curr.total, 0)}
                  </h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2">View financials &rarr;</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-6">
                  <div>
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight flex items-center">
                      <span className="mr-2 text-teal-600 animate-pulse">●</span> Quick Ongoing Activity Overview
                    </h3>
                    <p className="text-xs text-slate-400">Current active status across live clinics and registers.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-rose-50 text-rose-600 font-bold rounded-lg text-sm">❤️</div>
                        <div>
                          <h4 className="text-sm font-black text-slate-900">Cardiology Diagnostics Ward</h4>
                          <p className="text-xs text-slate-400">Active Consultations right now</p>
                        </div>
                      </div>
                      <span className="text-xs font-black bg-rose-100 text-rose-700 px-3 py-1 rounded-md">84% Occupancy</span>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-emerald-50 text-emerald-600 font-bold rounded-lg text-sm">🧪</div>
                        <div>
                          <h4 className="text-sm font-black text-slate-900">Main Pharmacy Inventory</h4>
                          <p className="text-xs text-slate-400">Automated Dispensary Stock Check</p>
                        </div>
                      </div>
                      <span className="text-xs font-black bg-emerald-100 text-emerald-700 px-3 py-1 rounded-md">Nominal Status</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Direct Administration Shortcuts</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <button onClick={() => setActiveRole('Reports')} className="w-full text-left p-3 hover:bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase flex justify-between items-center group transition-all">
                        <span>📈 Run Analytics & Metrics Report</span>
                        <span className="text-slate-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                      <button onClick={() => setActiveRole('Settings')} className="w-full text-left p-3 hover:bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase flex justify-between items-center group transition-all">
                        <span>⚙️ Alter Core Hospital Systems</span>
                        <span className="text-slate-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-cyan-950 text-cyan-100 rounded-xl border border-cyan-900 text-xs text-center font-semibold">
                    🔐 Administrative security measures active.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* REPORTS & ANALYTICS MODULE */}
          {activeRole === 'Reports' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Clinical Productivity</span>
                  <h4 className="text-2xl font-black text-slate-900">100% Appointment Fulfillment</h4>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                    <div className="bg-teal-600 h-full w-[100%]"></div>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">0 cancelled slots during this session.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Financial Liquidity Ratio</span>
                  <h4 className="text-2xl font-black text-slate-900">
                    {Math.round((billingList.filter(b => b.status === 'Paid').length / billingList.length) * 100)}% Collection Rate
                  </h4>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                    <div className="bg-indigo-600 h-full w-[50%]"></div>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">Out of {billingList.length} issued invoices.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Pharmacy Stock Integrity</span>
                  <h4 className="text-2xl font-black text-slate-900">
                    {inventory.filter(i => i.status === 'In Stock').length} / {inventory.length} Stable
                  </h4>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                    <div className="bg-amber-500 h-full w-[75%]"></div>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">{inventory.filter(i => i.status !== 'In Stock').length} line items need rapid refill.</p>
                </div>
              </div>

              {/* Data Visualization Grid Mapping */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
                <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Strategic Performance Matrix</h3>
                    <p className="text-xs text-slate-400">Aggregated database computation summaries for active registers.</p>
                  </div>
                  <button onClick={() => window.print()} className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl uppercase tracking-wider shadow-xs transition-all">
                    🖨️ Export Dataset
                  </button>
                </div>
                <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="text-xl">👥</span>
                    <h5 className="text-xl font-black text-slate-900 mt-1">{patientsList.length}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Total Patients</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="text-xl">🩺</span>
                    <h5 className="text-xl font-black text-slate-900 mt-1">{doctorsList.length}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Active Staff Doctors</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="text-xl">📦</span>
                    <h5 className="text-xl font-black text-slate-900 mt-1">
                      {inventory.reduce((acc, item) => acc + item.stock, 0)}
                    </h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Total Units Stocked</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="text-xl">💵</span>
                    <h5 className="text-xl font-black text-slate-900 mt-1">
                      {settings.currency} {billingList.filter(b => b.status === 'Unpaid').reduce((acc, b) => acc + (b.total - b.paidAmount), 0)}
                    </h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Receivable Balance</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HOSPITAL SETTINGS MODULE */}
          {activeRole === 'Settings' && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden max-w-3xl mx-auto">
              <div className="p-5 border-b border-slate-100 bg-slate-50">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Hospital Configuration Variables</h3>
                <p className="text-xs text-slate-400">Modify framework state fields and dynamic template variables instantly.</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">Hospital Branding Title</label>
                    <input 
                      type="text" 
                      value={settings.hospitalName} 
                      onChange={(e) => setSettings({...settings, hospitalName: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">Global Currency Symbol</label>
                    <input 
                      type="text" 
                      value={settings.currency} 
                      onChange={(e) => setSettings({...settings, currency: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">State Refresh Routine</label>
                    <select 
                      value={settings.refreshInterval} 
                      onChange={(e) => setSettings({...settings, refreshInterval: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"
                    >
                      <option value="Live Updates">Live Intercept Streams</option>
                      <option value="5 Minutes">Interval-based Polling (5m)</option>
                      <option value="Manual">Manual Hardware Triggers Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">Database Backup Routine</label>
                    <select 
                      value={settings.backupFrequency} 
                      onChange={(e) => setSettings({...settings, backupFrequency: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"
                    >
                      <option value="Daily Automatic">Daily Encrypted Cloud Mirror</option>
                      <option value="Weekly Secure">Weekly Local Storage Sync</option>
                      <option value="Disabled">No Automated System Backup</option>
                    </select>
                  </div>
                </div>
                
                <div className="p-4 bg-teal-50 border border-teal-100 text-teal-800 text-xs rounded-xl flex items-start space-x-3 font-semibold">
                  <span className="text-base">ℹ️</span>
                  <div>
                    <p className="font-bold text-teal-900 uppercase text-[10px] tracking-wider mb-0.5">Dynamic Engine Notification</p>
                    Changing config options alters global UI variables instantly across all workspace navigation segments.
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button onClick={() => alert('Operational variable matrix committed to application state.')} className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all">
                    Save Config Settings
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* APPOINTMENTS MODULE */}
          {activeRole === 'Appointments' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Schedule Slot</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Select Patient</label>
                    <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Patient --</option>
                      {patientsList.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Assigned Physician</label>
                    <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Doctor --</option>
                      {doctorsList.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Date</label>
                      <input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Time</label>
                      <input type="text" placeholder="e.g., 10:30 AM" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all">
                    Register Appointment
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      <th className="p-4">ID</th>
                      <th className="p-4">Patient</th>
                      <th className="p-4">Doctor</th>
                      <th className="p-4">Schedule</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {appointments.filter(a => searchFilter(a.patientName) || searchFilter(a.doctorName)).map(apt => (
                      <tr key={apt.id} className="hover:bg-slate-50/80 transition-all">
                        <td className="p-4 font-bold text-teal-600">{apt.id}</td>
                        <td className="p-4 font-black text-slate-900">{apt.patientName}</td>
                        <td className="p-4">{apt.doctorName}</td>
                        <td className="p-4">
                          <span className="block font-medium text-slate-500">{apt.date}</span>
                          <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-sm font-bold text-slate-600">{apt.time}</span>
                        </td>
                        <td className="p-4 text-right">
                          <button onClick={() => removeAppointment(apt.id)} className="text-slate-400 hover:text-rose-600 p-1 rounded-md hover:bg-rose-50 transition-all">
                            <UIListIcons.Trash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PRESCRIPTION MODULE */}
          {activeRole === 'Prescription' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Issue Rx Pad</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Select Patient</label>
                    <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Patient --</option>
                      {patientsList.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Prescribing Doctor</label>
                    <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Doctor --</option>
                      {doctorsList.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Diagnosis</label>
                    <input type="text" placeholder="e.g., Seasonal Flu" value={rxDiagnosis} onChange={(e) => setRxDiagnosis(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Medications & Dosage</label>
                    <textarea rows="3" placeholder="e.g., Paracetamol 500mg (2x daily)" value={rxMeds} onChange={(e) => setRxMeds(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all resize-none"/>
                  </div>
                  <button type="submit" className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all">
                    Commit Prescription Record
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="p-4 border-b border-slate-100 bg-slate-50 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Active Clinical Formulas Issued
                </div>
                <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
                  {prescriptions.filter(p => searchFilter(p.patientName) || searchFilter(p.diagnosis)).map(rx => (
                    <div key={rx.id} className="p-5 hover:bg-slate-50/50 transition-all flex justify-between items-start gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-black text-teal-600">{rx.id}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                          <span className="text-xs font-black text-slate-900">{rx.patientName}</span>
                          <span className="text-[10px] text-slate-400 font-medium">via {rx.doctorName}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Clinical Implication</span>
                          <p className="text-xs font-bold text-slate-800">{rx.diagnosis}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Regimen Matrix</span>
                          <p className="text-xs text-slate-500 bg-slate-50 border border-slate-100 p-2 rounded-lg font-mono">{rx.meds}</p>
                        </div>
                      </div>
                      <button onClick={() => removePrescription(rx.id)} className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-all flex-shrink-0">
                        <UIListIcons.Trash />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MEDICAL HISTORY MODULE */}
          {activeRole === 'Medical History' && (
            <div className="space-y-6">
              {medicalHistories.map(historyObj => (
                <div key={historyObj.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <div>
                      <h3 className="text-base font-black text-slate-900 tracking-tight">{historyObj.patientName}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Timeline Chart &bull; ID: {historyObj.id}</p>
                    </div>
                    <span className="text-xs font-black bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1 rounded-lg">Blood Group: {historyObj.bloodGroup}</span>
                  </div>
                  <div className="relative border-l-2 border-slate-100 ml-2 pl-6 space-y-6">
                    {historyObj.history.map((event, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[31px] top-0.5 bg-white border-2 border-teal-600 rounded-full h-3 w-3"></div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-400">{event.date} &bull; Attending: {event.doc}</span>
                          <h4 className="text-sm font-black text-slate-900">{event.event}</h4>
                          <p className="text-xs text-slate-500 max-w-2xl">{event.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* INVENTORY MODULE */}
          {activeRole === 'Inventory' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Add Supply Unit</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Item Label</label>
                    <input type="text" placeholder="e.g., Insulin Amps" value={invItem} onChange={(e) => setInvItem(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Allocation Category</label>
                    <select value={invCat} onChange={(e) => setInvCat(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Disposables">Disposables</option>
                      <option value="Fluids">Fluids</option>
                      <option value="Emergency Meds">Emergency Meds</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Total Quantity</label>
                      <input type="number" placeholder="100" value={invQty} onChange={(e) => setInvQty(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Min Threshold</label>
                      <input type="number" placeholder="20" value={invMin} onChange={(e) => setInvMin(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all">
                    Register Line Item
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      <th className="p-4">Item Matrix</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Stock Matrix</th>
                      <th className="p-4">Status Alert</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {inventory.filter(i => searchFilter(i.itemName) || searchFilter(i.category)).map(item => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-all">
                        <td className="p-4">
                          <span className="block font-black text-slate-900">{item.itemName}</span>
                          <span className="text-[10px] font-mono text-slate-400">{item.id}</span>
                        </td>
                        <td className="p-4 font-bold text-slate-500">{item.category}</td>
                        <td className="p-4 font-mono font-bold text-slate-900">{item.stock} <span className="text-[10px] font-sans text-slate-400 font-medium">{item.unit}</span></td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
                            item.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                            item.status === 'Low Stock' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                            'bg-rose-50 text-rose-700 border border-rose-200 animate-pulse'
                          }`}>{item.status}</span>
                        </td>
                        <td className="p-4 text-right">
                          <button onClick={() => removeInventoryItem(item.id)} className="text-slate-400 hover:text-rose-600 p-1 rounded-md hover:bg-rose-50 transition-all">
                            <UIListIcons.Trash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* BILLING MODULE */}
          {activeRole === 'Billing' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Invoice Generation</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Select Patient Target</label>
                    <select value={billPatient} onChange={(e) => setBillPatient(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Patient --</option>
                      {patientsList.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Gross Fee Amount ({settings.currency})</label>
                    <input type="number" placeholder="5000" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Line Items (Comma Separated)</label>
                    <input type="text" placeholder="Consultation Fee (Rs. 2000), Lab (Rs. 3000)" value={billItemsStr} onChange={(e) => setBillItemsStr(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <button type="submit" className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all">
                    Generate Paid Receipt
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="divide-y divide-slate-100">
                  {billingList.filter(b => searchFilter(b.patientName) || searchFilter(b.status)).map(bill => (
                    <div key={bill.id} className="p-6 hover:bg-slate-50/60 transition-all space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 block">{bill.id} &bull; Generated {bill.date}</span>
                          <span className="text-sm font-black text-slate-900">{bill.patientName}</span>
                        </div>
                        <div className="text-right flex items-center space-x-3">
                          <div>
                            <span className="block text-xs font-black text-slate-900">{settings.currency} {bill.total}</span>
                            {bill.discount > 0 && <span className="text-[10px] text-emerald-600 font-bold">Disc: {settings.currency} {bill.discount}</span>}
                          </div>
                          <span className={`px-2 py-0.5 text-[9px] font-black uppercase rounded-sm ${bill.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>{bill.status}</span>
                          <button onClick={() => removeInvoice(bill.id)} className="text-slate-400 hover:text-rose-600 p-1 rounded-md transition-all">
                            <UIListIcons.Trash />
                          </button>
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mb-1">Receipt Allocation Breakdown</span>
                        <ul className="list-disc pl-4 space-y-0.5 text-[11px] font-medium text-slate-600">
                          {bill.items.map((it, idx) => <li key={idx}>{it}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DOCTOR REGISTRY MODULE */}
          {activeRole === 'Doctor' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Onboard Staff</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Full Legal Name</label>
                    <input type="text" placeholder="Hamza Shah" value={formInpName} onChange={(e) => setFormInpName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Specialization Matrix</label>
                    <input type="text" placeholder="Cardiology" value={formInpField2} onChange={(e) => setFormInpField2(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Assigned Clinic Ward</label>
                    <input type="text" placeholder="ICU Block A" value={formInpField3} onChange={(e) => setFormInpField3(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <button type="submit" className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all">
                    Register Staff Card
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      <th className="p-4">Physician Identity</th>
                      <th className="p-4">Operational Domain</th>
                      <th className="p-4">Location Sector</th>
                      <th className="p-4 text-right">Action Log</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {doctorsList.filter(d => searchFilter(d.name) || searchFilter(d.specialization)).map(doc => (
                      <tr key={doc.id} className="hover:bg-slate-50/80 transition-all">
                        <td className="p-4">
                          <span className="block font-black text-slate-900">{doc.name}</span>
                          <span className="text-[10px] font-mono text-slate-400">{doc.id} &bull; {doc.contact}</span>
                        </td>
                        <td className="p-4 font-bold text-teal-700">{doc.specialization}</td>
                        <td className="p-4 text-slate-500">{doc.ward}</td>
                        <td className="p-4 text-right">
                          <button onClick={() => removeDoctor(doc.id)} className="text-slate-400 hover:text-rose-600 p-1 rounded-md hover:bg-rose-50 transition-all">
                            <UIListIcons.Trash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PATIENT REGISTRY MODULE */}
          {activeRole === 'Patient' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Admit Patient</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Full Legal Name</label>
                    <input type="text" placeholder="Muhammad Ali" value={formInpName} onChange={(e) => setFormInpName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Age (Years)</label>
                      <input type="number" placeholder="24" value={formInpField2} onChange={(e) => setFormInpField2(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">ABO Matrix Group</label>
                      <select value={formInpField4} onChange={(e) => setFormInpField4(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                        {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Contact Communication Line</label>
                    <input type="text" placeholder="0300-1234567" value={formInpField3} onChange={(e) => setFormInpField3(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all"/>
                  </div>
                  <button type="submit" className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all">
                    Commit Registry Entry
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      <th className="p-4">Patient Demographics</th>
                      <th className="p-4">ABO Status</th>
                      <th className="p-4">Department / Clinic</th>
                      <th className="p-4 text-right">Action Log</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                    {patientsList.filter(p => searchFilter(p.name) || searchFilter(p.id)).map(pat => (
                      <tr key={pat.id} className="hover:bg-slate-50/80 transition-all">
                        <td className="p-4">
                          <span className="block font-black text-slate-900">{pat.name}</span>
                          <span className="text-[10px] font-mono text-slate-400">{pat.id} &bull; Age {pat.age} &bull; {pat.contact}</span>
                        </td>
                        <td className="p-4"><span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono font-black text-slate-700 border border-slate-200">{pat.bloodGroup}</span></td>
                        <td className="p-4">
                          <span className="block font-bold text-slate-600">{pat.department}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{pat.condition}</span>
                        </td>
                        <td className="p-4 text-right">
                          <button onClick={() => removePatient(pat.id)} className="text-slate-400 hover:text-rose-600 p-1 rounded-md hover:bg-rose-50 transition-all">
                            <UIListIcons.Trash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}