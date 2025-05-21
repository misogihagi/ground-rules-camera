echo << EOF > /etc/systemd/system/ground-rules-camera.service
[Unit]
Description=Stream Image to Virtual Video Device
After=network.target

[Service]
ExecStart=/usr/bin/ffmpeg -loop 1 -re -i /usr/local/share/images/image$((10#$(date +%%d) %% 9)).png -f v4l2 -pix_fmt yuv420p /dev/video42

Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF
