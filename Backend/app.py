from flask import Flask, jsonify,request
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def get_db_connection():
    conn = psycopg2.connect(
        host='localhost',
        database='testdb',
        user='postgres',
        password='1234'
    )
    return conn

@app.route('/api/testcases', methods=['GET'])
def get_testcases():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT id, test_case_name, estimate_time, module, priority, status, last_updated FROM testcases')
    testcases = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify([{
        'id': row[0],
        'test_case_name': row[1],
        'estimate_time': row[2],
        'module': row[3],
        'priority': row[4],
        'status': row[5],
        'last_updated': row[6]
    } for row in testcases])


@app.route('/api/testcases/<int:testcase_id>', methods=['PUT'])
def update_testcase(testcase_id):
    status = request.json.get('status')
    if not status:
        return jsonify({'error': 'Status is required'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('UPDATE testcases SET status = %s, last_updated = CURRENT_TIMESTAMP WHERE id = %s', (status, testcase_id))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'success': True})


if __name__ == '__main__':
    app.run(debug=True)
