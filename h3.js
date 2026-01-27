document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الاتصال...';
    btn.style.opacity = '0.7';
    
    // محاكاة الاتصال
    setTimeout(() => {
        alert('تم تسجيل الدخول بنجاح! استمتع بالإنترنت.');
        btn.innerHTML = 'دخول الإنترنت';
        btn.style.opacity = '1';
    }, 2000);
});