/*
   File: script.js
   Deskripsi: File JavaScript untuk membuat website portofolio interaktif
*/

// Tunggu sampai dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Menu hamburger untuk tampilan mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    // Toggle menu mobile saat hamburger diklik
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Tutup menu mobile saat link di klik
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Ubah Header saat di-scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Aktifkan link navigasi sesuai dengan section yang sedang dilihat
    const sections = document.querySelectorAll('section');
    
    function activeNavLink() {
        let scrollPosition = window.scrollY + 100; // Offset untuk header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Hapus kelas active dari semua link
                navLinksItems.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Tambahkan kelas active ke link yang sesuai dengan section
                document.querySelector(`.nav-links a[href*="${sectionId}"]`).classList.add('active');
            }
        });
    }
    
    // Panggil fungsi activeNavLink saat halaman dimuat dan saat di-scroll
    window.addEventListener('scroll', activeNavLink);
    window.addEventListener('load', activeNavLink);
    
    // Animasi pada elemen saat scroll
    function revealOnScroll() {
        const timeline = document.querySelectorAll('.timeline-item');
        const education = document.querySelectorAll('.education-item');
        const business = document.querySelectorAll('.business-card');
        
        // Fungsi untuk memeriksa apakah elemen sudah terlihat di viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Tampilkan elemen timeline dengan animasi
        timeline.forEach(item => {
            if (isInViewport(item)) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
        
        // Tampilkan elemen education dengan animasi
        education.forEach(item => {
            if (isInViewport(item)) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
        
        // Tampilkan elemen business dengan animasi
        business.forEach(item => {
            if (isInViewport(item)) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Atur animasi awal
    function setupAnimations() {
        const timeline = document.querySelectorAll('.timeline-item');
        const education = document.querySelectorAll('.education-item');
        const business = document.querySelectorAll('.business-card');
        
        // Set opacity awal dan transform untuk animasi
        timeline.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.5s ease';
        });
        
        education.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.5s ease';
        });
        
        business.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.5s ease';
        });
    }
    
    // Panggil fungsi setupAnimations saat halaman dimuat
    setupAnimations();
    
    // Panggil fungsi revealOnScroll saat halaman di-scroll
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    
    // Form Submit Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Ambil nilai dari form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validasi form sederhana
            if (!name || !email || !subject || !message) {
                alert('Mohon isi semua field yang diperlukan.');
                return;
            }
            
            // Tampilkan pesan sukses (dalam kasus nyata, ini akan mengirim data ke server)
            alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scroll untuk link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset untuk header
                const headerOffset = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tambahkan animasi tulisan di halaman home
    const typeWriter = document.querySelector('.home-text h1');
    if (typeWriter) {
        const text = typeWriter.textContent;
        typeWriter.innerHTML = '';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                typeWriter.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        // Tunggu sebentar sebelum memulai animasi typing
        setTimeout(type, 500);
    }
});