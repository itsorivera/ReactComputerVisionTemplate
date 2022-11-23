
export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        //get prediction scores, results
        const [x,y,width,height] = prediction['bbox']
        const text = prediction['class']
        const score = prediction['score']

        //set styling
        const color = 'green'

        ctx.fillStyle = color
        ctx.font = "18px Arial"
        ctx.strokeStyle = color

        //draw rectangle and text
        ctx.beginPath()
        ctx.fillText(text + ' ' + score, x, y)
        ctx.rect(x,y,width,height) //rectangle
        ctx.stroke() // actually draw on my path
        
    });
}