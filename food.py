from flask.scaffold import F
from sqlalchemy import over


breakfast = 'toast and jam'
lunch = 'pasta'
dinner = 'lasagna'
snacks = 'biscuits'

basic_comments = 'basic comments typed in here'
overall_comments = f'summary is {breakfast} + {lunch} + {dinner} + {snacks}'

basic = True


if basic:
    print(basic_comments)
else:
    print(overall_comments)