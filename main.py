import ast
import requests


def get_sentence(word):
    token = 'PhIVhJh4jlfr1KxKLu7o1jOKcHIwV5kF'
    prompt = f'a sentence that ends with the word \"water\": I drank a lot of water.\na sentence that ends with the word \"candy\": This gum tastes like candy.\na sentence that ends with the word \"dry\": Your skin is very dry.\n a sentence that ends with the word \"cake\": It\'s your birthday so I got you a cake.\na sentence that ends with the word \"wasteful\": making chocolate is wasteful.\na sentence that ends with the word \"dog\": I have a pet dog.\na sentence that ends with the word \"mom\": She is my mom.\na sentence that ends with the word \"smile\": I love your smile.\na sentence that ends with the word \"job\": I like my job.\na sentence that ends with the word \"table\": I put my bag on the table.\na sentence that ends with the word \"bag\": I have a bag.\na sentence that ends with the word \"liquid\": water is liquid.\na sentence that ends with the word \"love\": She is my love.\na sentence that ends with the word \"drama\": I love drama.\na sentence that ends with the word \"playground\": The kids are playing in the playground.\na sentence that ends with the word \"boy\": He is a boy.\na sentence that ends with the word \"sophisticated\": She is sophisticated.\na sentence that ends with the word \"bottle\": I have a bottle.\na sentence that ends with the word \"cookies\": I am addicted to cookies.\na sentence that ends with the word \"{word}\":'

    response = requests.post("https://api.ai21.com/studio/v1/j1-large/complete",
                             headers={"Authorization": f'Bearer {token}'},
                             json={
                                 "prompt": prompt,
                                 "numResults": 3,
                                 "maxTokens": 20,
                                 "temperature": 0.9,
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
    print(res['completions'])
    # for x in res['completions']:
    #     sentence = x
    #     print(sentence, '<<<<< MY SENTENCE HERE')


def get_rhyme(word):
    x = requests.get(f'https://api.datamuse.com/words?rel_rhy={word}')
    rhyme_list = ast.literal_eval(x.text)
    # {'word': 'demagogue', 'score': 2827, 'numSyllables': 3}
    top_rhyme = rhyme_list[0]
    # print(f'numSyllables={top_rhyme["numSyllables"]}')
    return top_rhyme['word']


def get_last_word_of_sentence(sentence):
    return sentence.split(' ')[-1]


if __name__ == '__main__':
    last_word = get_last_word_of_sentence('I want to code')
    print(f'last word is: {last_word}')
    ans = get_rhyme(last_word)
    print(f'rhyme is: {ans}')
    rhyme_sentence = get_sentence(ans)
    print(f'sentence is: {rhyme_sentence}')
