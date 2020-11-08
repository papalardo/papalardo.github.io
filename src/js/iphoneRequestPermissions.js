const parallaxInit = require('./parallax').init

let motionPermissionState = false;

const bindIphoneRequestPermission = () => {
    if (typeof DeviceMotionEvent.requestPermission === 'function' && !motionPermissionState) {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                
                document.removeEventListener('click', bindIphoneRequestPermission, false)

                if (permissionState === 'granted') {
                    motionPermissionState = true
                    parallaxInit()
                }
            })
            .catch(console.error);
    }
}

document.addEventListener('click', bindIphoneRequestPermission, false)