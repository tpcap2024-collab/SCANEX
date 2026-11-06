import './App.css'

type ScanMode = 'loading' | 'unloading'

function App() {
  const handleSelectMode = (mode: ScanMode) => {
    const modeName = mode === 'loading' ? 'Loading Scan' : 'Unloading Scan'
    window.alert(`${modeName} will be available in the next step.`)
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <img
          src={`${import.meta.env.BASE_URL}pwa-192x192.png`}
          className="app-logo"
          alt="SCANEX application logo"
        />
        <div className="app-title">
          <h1>SCANEX</h1>
          <p>Smart Scanning &amp; Delivery Verification System</p>
        </div>
        <span className="poc-badge">POC</span>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">Mobile Delivery Verification</span>
          <h2>
            Scan Smart.
            <br />
            Deliver Right.
          </h2>
          <p>
            Scan parts with a mobile phone to reduce manual counting and
            prevent wrong delivery.
          </p>
        </div>

        <div className="verification-flow" aria-label="Verification process">
          <div className="flow-item">
            <span className="flow-icon">BAR</span>
            <span>Barcode</span>
          </div>
          <span className="flow-arrow">&gt;</span>
          <div className="flow-item">
            <span className="flow-icon">OCR</span>
            <span>OCR</span>
          </div>
          <span className="flow-arrow">&gt;</span>
          <div className="flow-item">
            <span className="flow-icon">GPS</span>
            <span>GPS</span>
          </div>
        </div>
      </section>

      <section className="scan-section">
        <div className="section-heading">
          <div>
            <span className="section-label">SELECT OPERATION</span>
            <h2>Choose scan mode</h2>
          </div>
          <span className="system-status">
            <span className="status-dot" />
            System ready
          </span>
        </div>

        <div className="scan-grid">
          <button
            type="button"
            className="scan-card loading-card"
            onClick={() => handleSelectMode('loading')}
          >
            <span className="card-number">01</span>
            <span className="card-icon">UP</span>
            <span className="card-content">
              <strong>Loading Scan</strong>
              <small>Scan parts before loading onto the truck</small>
            </span>
            <span className="card-action">Start scanning &gt;</span>
          </button>

          <button
            type="button"
            className="scan-card unloading-card"
            onClick={() => handleSelectMode('unloading')}
          >
            <span className="card-number">02</span>
            <span className="card-icon">DOWN</span>
            <span className="card-content">
              <strong>Unloading Scan</strong>
              <small>Verify parts and destination before unloading</small>
            </span>
            <span className="card-action">Start verification &gt;</span>
          </button>
        </div>
      </section>

      <section className="technology-section">
        <div className="technology-item">
          <span className="technology-icon">BAR</span>
          <div>
            <strong>Barcode Scanner</strong>
            <small>Sticker No. recognition</small>
          </div>
          <span className="pending-badge">POC</span>
        </div>

        <div className="technology-item">
          <span className="technology-icon">OCR</span>
          <div>
            <strong>On-Device OCR</strong>
            <small>Dealer Code recognition</small>
          </div>
          <span className="pending-badge">POC</span>
        </div>

        <div className="technology-item">
          <span className="technology-icon">GPS</span>
          <div>
            <strong>GPS Geofencing</strong>
            <small>Delivery location verification</small>
          </div>
          <span className="pending-badge">POC</span>
        </div>
      </section>

      <footer className="app-footer">
        <span>SCANEX Mobile PWA</span>
        <span>Phase 1: Mobile Scanner POC</span>
      </footer>
    </main>
  )
}

export default App
