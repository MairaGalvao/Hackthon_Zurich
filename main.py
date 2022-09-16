import requests
import ast


def get_rhyme(word):
    x = requests.get(f'https://api.datamuse.com/words?rel_rhy={word}')
    rhyme_list = ast.literal_eval(x.text)
    top_rhyme = rhyme_list[0]   # {'word': 'demagogue', 'score': 2827, 'numSyllables': 3}
    return top_rhyme['word']


if __name__ == '__main__':
    ans = get_rhyme('sun')
    print(ans)
