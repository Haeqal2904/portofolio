// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Form Submission (WhatsApp Integration)
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Ganti nomor ini dengan nomor WhatsApp Anda (format internasional tanpa +)
        const waNumber = '6281234567890'; // <-- Ubah nomor ini
        
        // Format pesan
        const waMessage = `Halo, saya ${name}.\n\nEmail: ${email}\n\nPesan:\n${message}`;
        
        // Buat URL WhatsApp
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
        
        // Buka WhatsApp di tab baru
        window.open(waUrl, '_blank');
        
        // Reset form
        document.querySelector('.contact-form').reset();
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 242, 255, 0.1)';
        nav.style.borderBottom = '1px solid rgba(0, 242, 255, 0.2)';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.borderBottom = '1px solid var(--border-color)';
    }
});
