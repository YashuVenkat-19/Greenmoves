from flask import Flask, request
import easyocr
from flask import jsonify

coins = 1000

app = Flask(_name_)
reader = easyocr.Reader(['en'], gpu=False)
ocr_result = ''

@app.route("/", methods=['GET'])
def main():
    return "Venkat goat!"

@app.route("/get_value", methods=['GET'])
def get_data():
    value = "Hello, World!"
    return value

@app.route('/get_coins')
def get_global_var():
    return jsonify({'coins': coins})


@app.route('/process_image', methods=['POST'])
def process_image():
    global ocr_result
    image = request.files['image']
    image.save(image.filename)

    filename = image.filename.lower()

    if 'busticket' in filename:
        path = "C:/Users/snehj/OneDrive/Desktop/JAVA FILES/OCR/busticket.png"
        results = reader.readtext(path)

        text = ''
        for i in range(len(results)):
            if 'DATE' in results[i][1]:
                text += results[i+1][1] + ' '

        if(text == ''):
        
            ocr_result = 'Your bus ticket was not identified or is invalid. Please try again'

    
        ocr_result = 'Maanas, Your Bus Ticket for the day' +  text + ' has been recorded by GreenMoves and your rewards have been added! \n\n \n Congratulations on making the earth a better place to live! \n\n\n 🌍💓🎉'

    elif 'electricbill' in filename:

        tempavg = 12
        path = "C:/Users/snehj/OneDrive/Desktop/JAVA FILES/OCR/electricbill.png"
        results = reader.readtext(path)
        text = ''

        for i in range(len(results)):
            if 'Usage' in results[i][1] and i+7 < len(results):
                text += results[i+4][1] + ' '

        print(int(text))
        if(int(text) < tempavg):
            ocr_result = 'Maanas, Congratulations you have used less electricity than average! \n\n \n You rewards have now been added to your GreenMoves Wallet! \n\n\n 🌍💓🎉'
        else:
            ocr_result = 'Oh no! You have used more electricity than on average! Try again next month!'

    elif 'gardenbill' in filename:
        path = "C:/Users/snehj/OneDrive/Desktop/JAVA FILES/OCR/grocerybill.png"
        results = reader.readtext(path)
        text = ''

        for i in range(len(results)):
            if 'ME' in results[i][1] and i+2 < len(results):
                text += results[i+1][1] + results[i+2][1] + ' '
        ocr_result = 'Maanas, Your GreenMoves ID '+ text + 'has been identified and  your rewards have been added! \n\n \n Congratulations on making the earth a better place!\n\n\n🌍💓🎉'

    elif 'grocerybill' in filename:
        path = "C:/Users/snehj/OneDrive/Desktop/JAVA FILES/OCR/grocerybill.png"
        results = reader.readtext(path)
        text = ''

        for i in range(len(results)):
            if 'ME' in results[i][1] and i+2 < len(results):
                text += results[i+1][1] + results[i+2][1] + ' '
        ocr_result = 'Maanas, Your GreenMoves ID '+ text + 'has been identified and your rewards have been added! \n \n \n Congratulations on making the earth a better place!\n\n\n🌍💓🎉'

    else:
        # Code to handle unsupported image type
        ocr_result = ''

    return 'Success'

@app.route('/get_text', methods=['GET'])
def get_text():
    global ocr_result
    return ocr_result

if _name_ == '_main_':
    app.run("0.0.0.0")