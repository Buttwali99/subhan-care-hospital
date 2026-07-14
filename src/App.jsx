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

  // Dynamic Forms Setup
  const [formInpName, setFormInpName] = useState('');
  const [formInpField2, setFormInpField2] = useState('');
  const [formInpField3, setFormInpField3] = useState('');
  const [formInpField4, setFormInpField4] = useState('O+');

  // New states specifically for dynamic sprint 3 submissions
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

  const handleRoleChange = (roleNode) => {
    setActiveRole(roleNode);
    setSearchQuery('');
    setFormInpName('');
    setFormInpField2('');
    setFormInpField3('');
    setFormInpField4('O+');
    setSelectedPatient('');
    setSelectedDoctor('');
    setRxDiagnosis('');
    setRxMeds('');
    setInvItem('');
    setBillPatient('');
    setBillAmount('');
    setBillItemsStr('');
  };

  // Submission routing logic based on view
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
      
      // Auto-update or add simple diagnostic medical history
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

            {/* Sprint 3: Core Clinical Workflow Modules */}
            <div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3">Sprint 3 Core Modules</span>
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

            <div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase px-3">Registries</span>
              <div className="mt-1.5 space-y-1">
                {['Doctor', 'Patient', 'Receptionist', 'Admin'].map((role) => (
                  <button key={role} onClick={() => handleRoleChange(role)} className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
                    activeRole === role ? 'bg-teal-50 text-teal-800 border-l-4 border-teal-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}>
                    {role === 'Receptionist' ? 'Reception Staff' : `${role} Unit`}
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
            {['Dashboard', 'Appointments', 'Prescription', 'Medical History', 'Inventory', 'Billing'].map((roleNode) => (
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

        <main className="p-8 max-w-7xl w-full mx-auto space-y-8 animate-fadeIn">
          
          {/* Welcome Dashboard Ribbon */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center">
                System Operator: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-teal-600 ml-1.5 font-black">Wali</span>
              </h1>
              <p className="text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">Clinical Environment &bull; Sprint 3 Deploy</p>
            </div>
            {activeRole !== 'Admin' && activeRole !== 'Dashboard' && activeRole !== 'Medical History' && (
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

          {/* =========================================================================
              0. MAIN COMMAND CENTER DASHBOARD 
              ========================================================================= */}
          {activeRole === 'Dashboard' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Sprint 3 Dashboard Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveRole('Appointments')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Pending Slots</span>
                    <span className="text-xl">📅</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">{appointments.length} Scheduled</h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2">Manage clinical schedule &rarr;</p>
                </div>

                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveRole('Prescription')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Prescriptions Issued</span>
                    <span className="text-xl">📝</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">{prescriptions.length} Active</h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2">Issue patient prescription pad &rarr;</p>
                </div>

                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveRole('Inventory')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Supply Ledger Stock</span>
                    <span className="text-xl">📦</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">
                    {inventory.filter(i => i.status !== 'In Stock').length} Alerts
                  </h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2">Review stock levels &rarr;</p>
                </div>

                <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-2xl text-white shadow-xs cursor-pointer hover:shadow-md transition-all" onClick={() => setActiveRole('Billing')}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black tracking-widest uppercase opacity-80">Revenue & Invoicing</span>
                    <span className="text-xl">💳</span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">
                    Rs. {billingList.reduce((acc, curr) => acc + curr.total, 0)}
                  </h3>
                  <p className="text-[11px] font-medium opacity-90 mt-2">View paid/unpaid invoices &rarr;</p>
                </div>
              </div>

              {/* Dynamic Quick Actions Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Live Activity Feed */}
                <div className="lg:col-span-2 bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-6">
                  <div>
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight flex items-center">
                      <span className="mr-2 text-teal-600 animate-pulse">●</span> Quick Ongoing Activity Overview
                    </h3>
                    <p className="text-xs text-slate-400">Current active status across live clinics and pharmacy registers.</p>
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
                          <p className="text-xs text-slate-400">Automated Dispensary Stock Level Check</p>
                        </div>
                      </div>
                      <span className="text-xs font-black bg-emerald-100 text-emerald-700 px-3 py-1 rounded-md">Nominal Status</span>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="p-2.5 bg-amber-50 text-amber-600 font-bold rounded-lg text-sm">⚡</div>
                        <div>
                          <h4 className="text-sm font-black text-slate-900">Outpatient Consultation (OPD)</h4>
                          <p className="text-xs text-slate-400">Current average patient queue wait times</p>
                        </div>
                      </div>
                      <span className="text-xs font-black bg-amber-100 text-amber-700 px-3 py-1 rounded-md">~14 min Wait</span>
                    </div>
                  </div>
                </div>

                {/* Quick Nav Card */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Direct Shortcuts</h3>
                      <p className="text-xs text-slate-400">Jump directly into high-fidelity clinical flows.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <button onClick={() => setActiveRole('Appointments')} className="w-full text-left p-3 hover:bg-slate-50 border border-slate-100 hover:border-slate-300 rounded-xl text-xs font-bold uppercase flex justify-between items-center group transition-all">
                        <span>📅 Book Clinical Appointment</span>
                        <span className="text-slate-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                      <button onClick={() => setActiveRole('Prescription')} className="w-full text-left p-3 hover:bg-slate-50 border border-slate-100 hover:border-slate-300 rounded-xl text-xs font-bold uppercase flex justify-between items-center group transition-all">
                        <span>📝 Draft Medical Rx Pad</span>
                        <span className="text-slate-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                      <button onClick={() => setActiveRole('Billing')} className="w-full text-left p-3 hover:bg-slate-50 border border-slate-100 hover:border-slate-300 rounded-xl text-xs font-bold uppercase flex justify-between items-center group transition-all">
                        <span>💳 Generate Billing Receipt</span>
                        <span className="text-slate-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-cyan-950 text-cyan-100 rounded-xl border border-cyan-900 text-xs text-center font-semibold">
                    🔐 Administrative security measures active. All action queries are securely bound to operator profile.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =========================================================================
              1. APPOINTMENTS MODULE
              ========================================================================= */}
          {activeRole === 'Appointments' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
              {/* Appointment Booking Panel */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-all">
                <div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Schedule Slot</h3>
                  <p className="text-xs text-slate-400">Lock in patient-physician consulting timetables.</p>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Select Patient</label>
                    <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Patient --</option>
                      {patientsList.map(p => <option key={p.id} value={p.name}>{p.name} ({p.id})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Assigned Physician</label>
                    <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Doctor --</option>
                      {doctorsList.map(d => <option key={d.id} value={d.name}>{d.name} ({d.specialization})</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Date</label>
                      <input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Time</label>
                      <input type="text" placeholder="e.g. 11:30 AM" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                    </div>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xs"><UIListIcons.Plus /> Lock Schedule</button>
                </form>
              </div>

              {/* Appointment Schedule List */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Active Consultation Queue</h3>
                {appointments.filter(a => searchFilter(a.patientName) || searchFilter(a.doctorName)).map(apt => (
                  <div key={apt.id} className="bg-white p-5 rounded-2xl border border-slate-200/85 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition-all">
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl p-2 bg-indigo-50 text-indigo-600 rounded-xl">📅</span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-base font-black text-slate-900">{apt.patientName}</h4>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 rounded-md text-slate-400">{apt.id}</span>
                        </div>
                        <p className="text-xs text-slate-500 font-bold mt-1">🩺 Consultation Dr: <span className="text-teal-700 font-medium">{apt.doctorName}</span></p>
                        <div className="flex items-center space-x-4 text-xs font-semibold text-slate-400 mt-2">
                          <span>📅 {apt.date}</span>
                          <span>⏰ {apt.time}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`self-start sm:self-center px-3 py-1 rounded-full text-[10px] font-black uppercase text-center ${
                      apt.status === 'Confirmed' ? 'bg-indigo-100 text-indigo-800' : apt.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>{apt.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              2. PRESCRIPTION MODULE
              ========================================================================= */}
          {activeRole === 'Prescription' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
              {/* Rx Formulation Form */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-all">
                <div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Generate Rx Pad</h3>
                  <p className="text-xs text-slate-400">Record diagnosis and specify exact dosage regimes.</p>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Target Patient</label>
                    <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Patient --</option>
                      {patientsList.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Prescribing Physician</label>
                    <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Doctor --</option>
                      {doctorsList.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Clinical Diagnosis</label>
                    <input type="text" placeholder="e.g. Acute Migraine / Seasonal Allergies" value={rxDiagnosis} onChange={(e) => setRxDiagnosis(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Prescribed Meds & Dosage Instruction</label>
                    <textarea rows="3" placeholder="e.g. Panadol 500mg (2x daily for 5 days), Syp. Hydryllin 1tsp (TDS)" value={rxMeds} onChange={(e) => setRxMeds(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-cyan-800 hover:bg-cyan-900 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xs"><UIListIcons.Plus /> Commit Prescription</button>
                </form>
              </div>

              {/* Prescription Archive Cards */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest font-sans">Active Prescriptions Ledger</h3>
                {prescriptions.filter(p => searchFilter(p.patientName) || searchFilter(p.diagnosis)).map(rx => (
                  <div key={rx.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                    <div className="bg-gradient-to-r from-cyan-900/10 to-teal-900/5 p-4 border-b border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md">{rx.id}</span>
                        <span className="text-xs text-slate-400 font-semibold ml-3">Issued: {rx.date}</span>
                      </div>
                      <span className="text-xs font-black text-slate-500 font-mono">💊 Subhan Rx Pad</span>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Patient Name</p>
                          <h4 className="text-base font-black text-slate-900">{rx.patientName}</h4>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Attending Physician</p>
                          <h4 className="text-sm font-black text-slate-700">{rx.doctorName}</h4>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 pt-3">
                        <p className="text-[10px] font-black text-rose-500 uppercase tracking-wider">Clinical Diagnosis</p>
                        <p className="text-sm font-black text-slate-800 mt-0.5">{rx.diagnosis}</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-black text-teal-700 uppercase tracking-wider">Meds Registry & Instructions</p>
                        <p className="text-xs text-slate-700 font-bold mt-1.5 leading-relaxed">{rx.meds}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              3. MEDICAL HISTORY MODULE
              ========================================================================= */}
          {activeRole === 'Medical History' && (
            <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Global Clinical Patient Case Files</h3>
                <p className="text-xs text-slate-400">Review comprehensive longitudinal health history timeline.</p>
              </div>

              {medicalHistories.map(mh => (
                <div key={mh.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 hover:shadow-sm transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-500">PT</div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900">{mh.patientName}</h4>
                        <span className="text-[10px] font-mono font-bold text-slate-400">{mh.id}</span>
                      </div>
                    </div>
                    <span className="self-start sm:self-center px-3 py-1 bg-rose-50 text-rose-700 rounded-lg text-xs font-black uppercase tracking-wider">Blood Status: {mh.bloodGroup}</span>
                  </div>

                  {/* Vertical History Timeline */}
                  <div className="relative pl-6 border-l-2 border-slate-200 space-y-6 ml-3">
                    {mh.history.map((record, index) => (
                      <div key={index} className="relative">
                        {/* Timeline Node Point indicator */}
                        <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-teal-500 border-4 border-white shadow-xs"></span>
                        
                        <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-2">
                          <div className="flex justify-between items-center">
                            <h5 className="text-sm font-black text-slate-900">{record.event}</h5>
                            <span className="text-xs text-slate-400 font-semibold">{record.date}</span>
                          </div>
                          <p className="text-xs font-semibold text-slate-600 mt-1 leading-relaxed">{record.details}</p>
                          <div className="border-t border-slate-200/60 pt-2 flex items-center justify-between mt-3 text-[10px] font-bold text-slate-400 uppercase">
                            <span>Authoring Dr: {record.doc}</span>
                            <span className="text-teal-600">Verified System Record</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* =========================================================================
              4. INVENTORY MODULE
              ========================================================================= */}
          {activeRole === 'Inventory' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
              {/* Inventory Item Form */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-all">
                <div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Register Medical Inventory</h3>
                  <p className="text-xs text-slate-400">Onboard consumables, diagnostics, and therapeutics.</p>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Item Name / Dosage Form</label>
                    <input type="text" placeholder="e.g. Normal Saline, Syringes" value={invItem} onChange={(e) => setInvItem(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Supply Category</label>
                    <select value={invCat} onChange={(e) => setInvCat(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="Pharmacy">Pharmacy Drugs</option>
                      <option value="Disposables">Surgical Disposables</option>
                      <option value="Fluids">IV Infusions & Fluids</option>
                      <option value="Emergency Meds">Emergency Crash Cart</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Initial Stock Qty</label>
                      <input type="number" placeholder="500" value={invQty} onChange={(e) => setInvQty(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Safety Min Limit</label>
                      <input type="number" placeholder="50" value={invMin} onChange={(e) => setInvMin(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                    </div>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xs"><UIListIcons.Plus /> Allocate Inventory Item</button>
                </form>
              </div>

              {/* Inventory Stock Cards */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Active Stock Ledger</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {inventory.filter(i => searchFilter(i.itemName) || searchFilter(i.category)).map(item => (
                    <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 bg-slate-100 rounded-md">{item.id}</span>
                          <span className={`px-2 py-0.5 text-[10px] font-black uppercase rounded-md text-white ${
                            item.status === 'In Stock' ? 'bg-emerald-600' : item.status === 'Low Stock' ? 'bg-amber-500' : 'bg-rose-600 animate-pulse'
                          }`}>{item.status}</span>
                        </div>
                        <h4 className="text-base font-black text-slate-900">{item.itemName}</h4>
                        <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500">
                          <div>Available: <span className="text-slate-900 font-bold">{item.stock} {item.unit}</span></div>
                          <div>Min Limit: <span className="text-slate-900 font-bold">{item.threshold}</span></div>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 pt-2.5 mt-4 text-[10px] font-black text-teal-600 uppercase tracking-wider">Category: {item.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              5. BILLING MODULE
              ========================================================================= */}
          {activeRole === 'Billing' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
              {/* Billing Invoice Entry Generator */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-all">
                <div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Invoice Processing</h3>
                  <p className="text-xs text-slate-400">Initialize financial transactions and itemize details.</p>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Billed Patient</label>
                    <select value={billPatient} onChange={(e) => setBillPatient(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold outline-hidden focus:bg-white focus:border-teal-600 transition-all">
                      <option value="">-- Choose Patient --</option>
                      {patientsList.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Consultation Total Charge (Rs.)</label>
                    <input type="number" placeholder="e.g. 7500" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Itemized Breakdown (Comma Separated)</label>
                    <textarea rows="3" placeholder="Consult Fee (Rs. 2000), Diagnostic Lab Check (Rs. 4000), IV Drip (Rs. 1500)" value={billItemsStr} onChange={(e) => setBillItemsStr(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-cyan-800 hover:bg-cyan-900 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-xs"><UIListIcons.Plus /> Commit Invoice Ledger</button>
                </form>
              </div>

              {/* Invoices List Display with visual layout */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Invoices Registry</h3>
                {billingList.filter(b => searchFilter(b.patientName)).map(bill => (
                  <div key={bill.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                    <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-mono font-black text-slate-500 bg-slate-100 px-2 py-1 rounded">{bill.id}</span>
                        <span className="text-xs text-slate-400 font-semibold ml-3">Date: {bill.date}</span>
                      </div>
                      <span className={`px-2.5 py-1 text-[10px] font-black uppercase rounded-md text-white ${bill.status === 'Paid' ? 'bg-emerald-600' : 'bg-rose-600'}`}>{bill.status}</span>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Patient</p>
                        <h4 className="text-base font-black text-slate-900">{bill.patientName}</h4>
                      </div>
                      
                      <div className="border-t border-slate-100 pt-3">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Itemized Breakdown</p>
                        <div className="space-y-1.5">
                          {bill.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-xs font-semibold text-slate-600 bg-slate-50 p-2 rounded-lg">
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
                        <div>
                          {bill.discount > 0 && <p className="text-[11px] font-bold text-slate-400 line-through">Subtotal: Rs. {bill.total}</p>}
                          <p className="text-lg font-black text-teal-800">Grand Total: Rs. {bill.total - bill.discount}</p>
                        </div>
                        <button onClick={() => alert(`Invoice generated successfully: Paid amount Rs. ${bill.total - bill.discount}`)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-lg text-xs uppercase transition-all">🖨️ Print Receipt</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DOCTOR MODULE REGISTRY ENTRY */}
          {activeRole === 'Doctor' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
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
                {doctorsList.filter(d => searchFilter(d.name)).map(doc => (
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PATIENT MODULE REGISTRY ENTRY */}
          {activeRole === 'Patient' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
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
                {patientsList.filter(p => searchFilter(p.name)).map(pat => (
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RECEPTIONIST MODULE REGISTRY ENTRY */}
          {activeRole === 'Receptionist' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fadeIn">
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
                    <input type="text" value={formInpField2} onChange={(e) => setFormInpField2(e.target.value)} placeholder="e.g. Lead Nurse" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Assigned Shift Rotation</label>
                    <input type="text" value={formInpField3} onChange={(e) => setFormInpField3(e.target.value)} placeholder="e.g. Morning Shift" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-hidden focus:bg-white focus:border-teal-600 transition-all" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center bg-slate-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-slate-900 transition-all shadow-xs"><UIListIcons.Plus /> Allocate Entry</button>
                </form>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {staffList.filter(s => searchFilter(s.name)).map(stf => (
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADMINISTRATIVE SYSTEM AUDIT TRACK */}
          {activeRole === 'Admin' && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md animate-fadeIn">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">System Node Action Logs</h3>
              </div>
              <div className="divide-y divide-slate-100 font-mono text-xs">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-slate-50/80 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase text-white bg-emerald-600">Success</span>
                    <span className="text-slate-400 font-bold">LOG-91</span>
                    <p className="text-slate-700 font-medium"> (Appointments, Prescriptions, Medical History, Inventory, Billing) Initialized Successfully</p>
                  </div>
                  <div className="text-right text-[11px] text-slate-400 font-semibold sm:pl-4">
                    <span>Wali</span> &bull; <span>Live</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}