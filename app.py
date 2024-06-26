from flask import Flask, request, jsonify, render_template
import subprocess
import re

app = Flask(__name__)

def filter_nmap_output(output):
    regex = re.compile(
        r"Starting Nmap.*?(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} UTC)?(.*?Nmap done.*? \d+\.\d+ seconds)",
        re.DOTALL
    )
    match = regex.search(output)
    if match:
        return match.group(0)
    return "Error: Unable to parse Nmap output"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/scan', methods=['POST'])
def scan():
    data = request.json
    target = data.get('target')
    scan_type = data.get('scanType')

    if not target:
        return jsonify({'error': 'No target specified'})

    try:
        if scan_type == 'fast':
            nmap_command = ['nmap', '-F', target]
        else:
            nmap_command = ['nmap', target]

        result = subprocess.run(nmap_command, capture_output=True, text=True)
        filtered_output = filter_nmap_output(result.stdout)
        return jsonify({'output': filtered_output})
    except subprocess.CalledProcessError as e:
        return jsonify({'error': f"Nmap error: {e.stderr}"})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
