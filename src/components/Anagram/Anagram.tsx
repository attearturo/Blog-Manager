import * as React from 'react';

const Anagram = () => {
    return (
        <section>
            <div>
                <h1>Anagram</h1>
            </div>
            <form>
                <input type="text" placeholder="Palabra1" />
                <input type="text" placeholder="Palabra2" />
                <button type="submit">Comparar</button>
            </form>
        </section>
    )

};

export default Anagram;