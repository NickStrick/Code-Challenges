// Problem: https://gist.github.com/seanchen1991/e676705436fe663920d7a00f6eff23c1
// Video: https://www.youtube.com/watch?v=XJK5GaaI6ZU&feature=youtu.be

function task_scheduler(tasks, deps) {
    // construct our degrees dict
    degrees = {}
    tasks.forEach(item => degrees[item] = 0)

    ordering = []

    // construct our empty graph
    graph = {}
    tasks.forEach(item => graph[item] = [])

    // populate the graph with connections
    for (const d of deps) {
        console.log(d)
        const prereq = d[0];
        const dep = d[1];

        graph[prereq].push(dep)
        degrees[dep] += 1


        queue = []
        console.log(graph, degrees)

        for (const [key, val] in degrees) {
            if (val == 0) {
                queue.push(key)
            }
        }

        while (queue.length > 0) {
            let node = queue.shift()
            ordering.push(node)
            // loop through nodes connections
            for (let c of graph[node]) {
                degrees[c] -= 1
                if (degrees[c] == 0) {
                    queue.push(c)
                }
            }

        }
        if (ordering.length !== tasks.length) {
            return []
        }

        return ordering

    }
}