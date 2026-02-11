function FindProxyForURL(url, host) {

    // --- CẤU HÌNH ---
    // Khung giờ cho phép: 14:00 - 14:59
    // timeRange(hour1, hour2) hoạt động theo giờ địa phương của máy tính
    var allowAccess = timeRange(14, 14);

    // --- DANH SÁCH DOMAIN TIKTOK ---
    var isTikTok = 
        // Website chính
        dnsDomainIs(host, "tiktok.com") || 
        shExpMatch(host, "*.tiktok.com") ||
        
        // App/Video server
        dnsDomainIs(host, "tiktokv.com") ||
        shExpMatch(host, "*.tiktokv.com") ||
        
        // CDN và ảnh (quan trọng)
        dnsDomainIs(host, "byteoversea.com") ||                
        shExpMatch(host, "*.byteoversea.com") ||
        dnsDomainIs(host, "ibytedtos.com") ||
        shExpMatch(host, "*.ibytedtos.com") ||
        dnsDomainIs(host, "tiktokcdn.com") ||
        shExpMatch(host, "*.tiktokcdn.com");

    // --- XỬ LÝ LOGIC ---
    if (isTikTok) {
        if (allowAccess) {
            // Trong khung giờ: Cho phép truy cập trực tiếp
            return "DIRECT";
        } else {
            // Ngoài khung giờ: Chặn kết nối bằng cách trỏ tới proxy ảo
            return "PROXY 127.0.0.1:9";
        }
    }

    // --- MẶC ĐỊNH ---
    // Các trang web khác không phải TikTok: Cho phép truy cập
    return "DIRECT";
}


