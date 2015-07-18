Play with mpv
=============

A chrome extension for playing youtube videos with an external application. In this case, mpv with a custom x11-name. This extension has only been tested on my specific setup, your mileage may vary.

Installation instructions
-------------------------

In order for this extension to work you must first install the native messaging host from the host directory.

To install the host:
> Run install_host.sh script in the host directory:
> > host/install_host.sh

> By default the host is installed only for the user who runs the script, but if
> you run it with admin privileges (i.e. 'sudo host/install_host.sh'), then the
> host will be installed for all users.

> You can later use host/uninstall_host.sh
> to uninstall the host.

You can then load the extension in chrome by visiting chrome://extensions, make sure "Developer mode" is selected, then "Load unpacked extension".