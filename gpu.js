function getGPU() {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
        return "WebGL Desteklenmiyor";
    }

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

    if (debugInfo) {
        return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }

    return "GPU Bilgisi Gizli";
}

const gpu = getGPU();

document.getElementById("gpuName").innerText = gpu;

if (gpu.includes("Adreno")) {
    document.getElementById("gpuInfo").innerText = "Adreno GPU";
} 
else if (gpu.includes("Mali")) {
    document.getElementById("gpuInfo").innerText = "Mali GPU";
} 
else if (gpu.includes("PowerVR")) {
    document.getElementById("gpuInfo").innerText = "PowerVR GPU";
} 
else {
    document.getElementById("gpuInfo").innerText = "Detaylı bilgi alınamadı";
}
