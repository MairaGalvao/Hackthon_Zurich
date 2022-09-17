export default function Drop({word}) {
    return <div>
        <div style={{padding: 15}}>
            <span style={{fontSize: 100, opacity: 0.4}}>💧</span>
        </div>
        <div style={{display: 'block', marginTop: -75}}>
            <span style={{fontSize: 15, fontWeight: 'bold'}}>{word.toLocaleUpperCase()}</span>
        </div>
    </div>

}