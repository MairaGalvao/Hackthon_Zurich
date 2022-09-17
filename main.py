import ast
import requests


def get_sentence(word):
    token = 'PhIVhJh4jlfr1KxKLu7o1jOKcHIwV5kF'
    prompt = f'sentence ending with the word \"moment\":To seize everything you ever wanted in one moment.\nsentence ending with the word \"heavy\":His palms are sweaty, knees weak, arms are heavy.\nsentence ending with the word \"spaghetti\":There\'s vomit on his sweater already, mom\'s spaghetti.\nsentence ending with the word \"knows\":He knows that but he\'s broke, he\'s so stagnant, he knows.\nsentence ending with the word \"music\":You better lose yourself in the music.\nsentence ending with the word \"{word}\":'
    print(prompt)
    response = requests.post("https://api.ai21.com/studio/v1/j1-large/complete",
                             headers={"Authorization": f'Bearer {token}'},
                             json={
                                 "prompt": prompt,
                                 "numResults": 1,
                                 "maxTokens": 39,
                                 "temperature": 0.69,
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
    top_rhyme = rhyme_list[0]  # {'word': 'demagogue', 'score': 2827, 'numSyllables': 3}
    # print(f'numSyllables={top_rhyme["numSyllables"]}')
    return top_rhyme['word']


def get_last_word_of_sentence(sentence):
    return sentence.split(' ')[-1]


if __name__ == '__main__':
    last_word = get_last_word_of_sentence('I want water to drink')
    print(f'last word is: {last_word}')
    ans = get_rhyme(last_word)
    print(f'rhyme is: {ans}')
    rhyme_sentence = get_sentence(ans)
    print(f'sentence is: {rhyme_sentence}')
