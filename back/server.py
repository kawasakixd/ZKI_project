from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from lr_3 import task_3_LR3, task_2_LR3, task_1_LR3
from lr_4 import task_1_LR4, task_2_LR4
from lr_5 import lr_5_2_1, lr_5_2_2, lr_5_2_3
from lr_7 import lr_7_1, lr_7_2
from lr_9 import  lr_9_1, lr_9_2, lr_9_3


app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})
app.config["CORS_HEADERS"] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == "POST":

        data = request.get_json(silent=True)
        req = {'nameFunction': data.get("nameFunction")}

        if data.get("LR") == 3:
            if req["nameFunction"] == 'LR3_EX1':
                return task_1_LR3(str(data.get('message')), int(data.get('countK')))
            elif req["nameFunction"] == 'LR3_EX2':
                return task_2_LR3(str(data.get("message")), int(data.get("a")), int(data.get("b")), int(data.get("c")))
            elif req["nameFunction"] == 'LR3_EX3':
                return task_3_LR3(str(data.get("flag")), str(data.get('message').upper()))

        elif data.get("LR") == 4:
            if req['nameFunction'] == 'LR4_EX1':
                return task_1_LR4()
            elif req['nameFunction'] == 'LR4_EX2':
                return task_2_LR4()

        elif data.get("LR") == 5:
            if req["nameFunction"] == "LR5_EX1":
                return lr_5_2_1(str(data.get('message')))
            elif req["nameFunction"] == "LR5_EX2_1":
                return lr_5_2_2(str(data.get('message')))
            elif req["nameFunction"] == "LR5_EX2_2":
                return lr_5_2_3(str(data.get('message')))

        elif data.get("LR") == 7:
            if req["nameFunction"] == "LR7_EX1":
                return lr_7_1(int(data.get('a')), int(data.get('b')), int(data.get('c')))

            elif req["nameFunction"] == "LR7_EX2":
                return lr_7_2(str(data.get('message')))

        elif data.get("LR") == 8:
            if req["nameFunction"] == "LR8_EX":
                return lr_9_1()

        elif data.get("LR") == 9:
            if req["nameFunction"] == "LR9_EX1":
                return lr_9_1(int(data.get('var')))

            elif req["nameFunction"] == "LR9_EX2":
                return lr_9_2(int(data.get('var')))

            elif req["nameFunction"] == "LR9_EX3":
                return lr_9_3(int(data.get('var')))

        elif data.get("LR") == 10:
            pass


    # elif request.method == "GET":
    #     return task_1_LR4()


if __name__ == '__main__':
    app.run(debug=True, host="localhost", port=5000)
