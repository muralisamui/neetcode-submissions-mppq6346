class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        if (n === 0) return 0; // Edge case: no cars
        
        const stack = [];
        const cars = [];
        
        // 1. Calculate time and store as objects
        for(let i = 0; i < n; i++){
            const time = (target - position[i]) / speed[i];
            cars.push({ pos: position[i], time: time });
        }
        
        // 2. Sort by position descending (closest to target first)
        cars.sort((a, b) => b.pos - a.pos);
        
        // 3. Process with stack logic
        for(let car of cars) {
            const time = car.time;
            // Get the time of the fleet currently at the "lead"
            const leadFleetTime = stack[stack.length - 1];
            
            if (stack.length === 0 || time > leadFleetTime) {
                // If this car is slower than the fleet in front, it starts a NEW fleet
                stack.push(time);
            } 
            // If time <= leadFleetTime, it joins the existing fleet (do nothing)
        }
        
        return stack.length;
    }
}