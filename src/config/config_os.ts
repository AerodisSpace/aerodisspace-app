export function is_mobile_platform() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android') || userAgent.includes('mobile') || userAgent.includes('iphone') || userAgent.includes('ipad')) {
        return true
    }
    return false
}