---
title: "Python: Planning Lunches and Groceries"
date: "2013-06-09"
categories: 
  - "code"
  - "python"
---

I bring my lunch to work to avoid food poisoning (I have food allergies, not paranoia). To be able to make these lunches for work when exhausted, I’d like a list of what to pack for a set number of days.

Today, I solved this problem by writing foodplan.py

```
from random import randint


protein= [‘2 hard boiled eggs’, ‘1 chicken sausage’, ‘1 serving soup’]
grains = [‘1 serving baby rice’, ‘1 serving overnight GF oatmeal’]
sides = [‘apples’, ‘coffee’, ‘plain’, ‘blueberries’, ‘bananas’]
fruit_veg = [‘cherry tomatoes’, ‘grapes’, ‘bell peppers’, ‘cucumbers’, ‘apples’]

def generate():
    print “How many days? n”
    days = int(raw_input())
    [one_meal() for day in xrange(days)]

def one_meal():
    print “%s n %s with %s n %s nn” %(protein[randint(0, len(protein)-1)], grains[randint(0, len(grains)-1)], sides[randint(0, len(sides)-1)], fruit_veg[randint(0, len(fruit_veg)-1)])

if __name__ == ‘__main__’:
    generate()
```

If, like me, your hatred for hard code exceeds your wariness of eval, you can rewrite `one_meal()` as two functions:

```
from random import randint

protein= [‘2 hard boiled eggs’, ‘1 chicken sausage’, ‘1 serving soup’]
grains = [‘1 serving baby rice’, ‘1 serving overnight GF oatmeal’]
sides = [‘apples’, ‘coffee’, ‘plain’, ‘blueberries’, ‘bananas’]
fruit_veg = [‘cherry tomatoes’, ‘grapes’, ‘bell peppers’, ‘cucumbers’, ‘apples’]

def generate():
    print “How many days? n”
    days = int(raw_input())
    [one_meal() for day in xrange(days)]

def one_meal():
    print ” %s n %s with %s n %s nn” % (pick(‘protein’), pick(‘grains’), pick(‘sides’), pick(‘fruit_veg’))

def pick(name):
    func = eval(name)
    return func[randint(0, len(func)-1)]

if __name__ == ‘__main__’:
    generate()
```

Adjust the contents of the arrays at the beginning to make this code applicable to your lunch planning desires.

Last year, I wanted to email myself grocery lists. I wrote foodemail.py to solve this problem (seems that my tastes haven’t changed much):

```
import smtplib
from datetime import datetime
import get


groceries = [“Hey! nnThe grocery list for this week is as follows: nn”]
food = {‘protein’: [[‘hummus’, 1.5, 780],[‘honey roasted turkey’, 0.75, 270],[‘tofu’, 0.4, 500], [‘soup’, 1.5, 250]], ‘drinks’: [[‘diet ginger ale(packs of 12)’, 0.5], [‘water bottles’, 3], [‘unsweetened almond/soy milk’, 0.75]], ‘fruit/veg’: [[‘oranges/clementines’, .2, 60],[‘bananas(bunch)’, .2, 80],[‘green apples’, 3, 80], [‘salad’, 1/3, 40], [‘frozen corn’, 0.5, 100],[‘green peppers’, 2, 15]]}

def noticeEMail(starttime, usr, psw, fromaddr, toaddr, message):
    # Calculate run time
    runtime=datetime.now() - starttime
    # Initialize SMTP server
    server=smtplib.SMTP(‘smtp.gmail.com:587’)
    server.starttls()
    server.login(usr,psw)
    # Send email
    senddate=datetime.strftime(datetime.now(), ‘%Y-%m-%d’)
    subject=”Grocery List for this week”
    m=”Date: %srnFrom: %srnTo: %srnSubject: %srnX-Mailer: My-Mailrnrn” % (senddate, fromaddr, toaddr, subject)
    msg=message
    server.sendmail(fromaddr, toaddr, m+msg)
    server.quit()

if __name__ == ‘__main__’:
    # Start time of script
    starttime=datetime.now()
    # Fill these in with the appropriate info…
    usr=’YOUREMAIL’
    psw=get.getPass(‘YOURPASSWORD’)
    fromaddr=’YOUREMAIL@SERVER.COM’
    toaddr= [‘RECIPIENT@SERVER.COM’, ‘RECIPIENT2@SERVER.COM’] #As many recipients as you like
    #creates appropriate grocery info
    index = [‘protein’, ‘drinks’, ‘fruit/veg’]
    print “Days?"
    days = int(raw_input())
    for x in range(0, len(food)):
        for y in range(0, len(food[index[x]])-1):
            if int(days*food[index[x]][y][1]) > 0:
                string = ‘t’ + food[index[x]][y][0] + ‘ x%d n’ % int(days*food[index[x]][y][1])
                groceries.append(string)
            else: pass
    print ‘ ‘.join(str(k) for k in groceries)
    print “Enter 0 if satisfactory, enter 1 to add to the list: “
    user = int(raw_input())
    if user == 0: pass
    elif user == 1:
        print “What would you like to add?”
        addition = raw_input()
        y = [x.strip() for x in addition.split(‘,’)]
        for x in xrange(0, len(y)):
            groceries.append(“t%s n” % y[x])
    groceries.append(“nCheers! nt tRin”)
    msg = ‘ ‘.join(str(k) for k in groceries)
    # Send notification email
    noticeEMail(starttime, usr, psw, fromaddr, toaddr, msg)
```

Looking at foodemail.py, I see that my coding has become more efficient over this past year.

I hope that these programs are useful for your food planning!
