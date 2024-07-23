import React from 'react'

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start fixed-bottom">
    <div className="container p-4">
      <p className="text-center">&copy; {new Date().getFullYear()} Library Dashboard. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer