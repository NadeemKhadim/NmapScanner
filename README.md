## Overview

This project provides a web-based interface for conducting Nmap scans via a Flask application. It allows users to specify a target (IP address or domain) and choose between regular and fast scans (common ports). The application runs the Nmap command on the server and displays filtered scan results to the user.

### Features

- Conduct Nmap scans via a web interface.
- Choose between regular and fast scan modes.
- Display filtered scan results in a user-friendly format.
- Responsive design for seamless usage across devices.
- Cybersecurity-themed design with animated elements.

## Installation

Follow these steps to set up and run the Nmap Scanner Web Interface locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nadeemkhadim/nmapscanner.git
   cd nmapscanner
   ```

2. **Install dependencies**:

   Ensure you have Python 3.x and pip installed. Install Flask and required libraries:

   ```bash
   pip3 install -r requirements.txt
   ```

   This installs Flask and other necessary packages listed in `requirements.txt`.

3. **Run the application**:

   Start the Flask development server:

   ```bash
   python3 app.py
   ```

   The application will be accessible at `http://localhost:5000` in your web browser.

  ![image](https://github.com/NadeemKhadim/NmapScanner/assets/123836307/1989c807-ebcb-484c-b850-4a8220c6e22f)

## Usage

1. **Access the application**:

   Open your web browser and go to `http://localhost:5000`.

2. **Scan a target**:

   - Enter the IP address or domain name of the target.
   - Select the scan type: Regular Scan or Fast Scan (Common Ports).
   - Click the "Scan" button.

3. **View scan results**:

   - Wait for the scan to complete.
   - The filtered scan output will be displayed in the results section.

## Customization

- **Changing Background**: Modify `style.css` to update background colors or add animations.
- **Adding Icons**: Use FontAwesome icons by including the CDN link or hosting the library locally.
- **Enhancing Security**: Implement additional security measures as per your requirements.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your suggested improvements. Ensure to follow the existing coding style and commit message conventions.

## Credits

This project is maintained by Nadeem Khadim.

## License

This project is licensed under the MIT License - see the GNU(LICENSE) file for details.

---

### Notes:

- Customize the installation, usage, and contribution sections based on specific project details.
- Include screenshots or GIFs of the application in action to enhance the README's visual appeal and usability.
- Ensure all dependencies and prerequisites are clearly listed and instructions are concise yet comprehensive.

This README template covers essential information to help users understand, install, and use your Nmap Scanner project effectively. Adjust and expand it according to your project's unique features and requirements before publishing it on GitHub.
