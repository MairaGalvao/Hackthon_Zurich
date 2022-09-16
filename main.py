import requests
import ast
import requests


def get_sentence(word):
    response = requests.post("https://api.ai21.com/studio/v1/j1-large/complete",
                             headers={
                                 "Authorization": "Bearer PhIVhJh4jlfr1KxKLu7o1jOKcHIwV5kF"},
                             json={
                                 "prompt": f'write a sentence that ends with the word bills:i have a lot of money but i also have a lot of bills.\nwrite a sentence that ends with the word pizza:i love salad but i also love pizza.\nwrite a sentence that ends with the word comunity:i love people and i am part of this comunity.\nwrite a sentence that ends with the word computer:i got a new job so i bought a new computer.\nwrite a sentence that ends with the word {word}:',
                                 "numResults": 1,
                                 "maxTokens": 39,
                                 "temperature": 0.89,
                                 "topKReturn": 0,
                                 "topP": 1,
                                 "countPenalty": {
                                     "scale": 0,
                                     "applyToNumbers": False,
                                     "applyToPunctuations": False,
                                     "applyToStopwords": False,
                                     "applyToWhitespaces": False,
                                     "applyToEmojis": False
                                 },
                                 "frequencyPenalty": {
                                     "scale": 0,
                                     "applyToNumbers": False,
                                     "applyToPunctuations": False,
                                     "applyToStopwords": False,
                                     "applyToWhitespaces": False,
                                     "applyToEmojis": False
                                 },
                                 "presencePenalty": {
                                     "scale": 0,
                                     "applyToNumbers": False,
                                     "applyToPunctuations": False,
                                     "applyToStopwords": False,
                                     "applyToWhitespaces": False,
                                     "applyToEmojis": False
                                 },
                                 "stopSequences": ["↵"]
                             }
                             )
    res = response.json()
    sentence = res['completions'][0]['data']['text']
    return sentence


def get_rhyme(word):
    x = requests.get(f'https://api.datamuse.com/words?rel_rhy={word}')
    rhyme_list = ast.literal_eval(x.text)
    # {'word': 'demagogue', 'score': 2827, 'numSyllables': 3}
    top_rhyme = rhyme_list[0]
    return top_rhyme['word']


if __name__ == '__main__':
    ans = get_rhyme('water')
    print(f'rhym is: {ans}')
    rhym_sentence = get_sentence(ans)
    print(f'sentence is: {rhym_sentence}')
