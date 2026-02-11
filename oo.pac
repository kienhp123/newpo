function FindProxyForURL(url, host) {

    // Lấy giờ hiện tại (theo giờ máy tính)
    var now = new Date();
    var hour = now.getHours();   // 0–23
    var minute = now.getMinutes();

    // Kiểm tra domain TikTok
    var isTikTok =
        dnsDomainIs(host, "tiktok.com") ||
        shExpMatch(host, "*.tiktok.com");

    // ===== TikTok: CHỈ cho phép từ 14:00 đến 15:00 =====
    if (isTikTok) {

        // Cho phép từ 14:00:00 đến 14:59:59
        if (hour === 22) {
            return "DIRECT";
        }

        // Ngoài khung giờ → BLOCK
        return "PROXY 127.0.0.1:9";
    }

    // ===== Các website khác =====
    return "DIRECT";
}
