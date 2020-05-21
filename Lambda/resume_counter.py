import boto3

visits = 1

def lambda_handler(event, context):
    client = boto3.resource('dynamodb')
    table = client.Table('resumesitecounter')
    
    global visits
    visits += 1
    
    input = {'Visits': visits, 'Site': '1'}
    
    table.put_item(Item=input)
    
    
    return {
        'statusCode': 200,
    }

