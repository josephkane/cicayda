(ns tech-int.core
  (:gen-class))

; LEAP YEAR

(defn checkIfLeapYear
    [year]
    (if (or (zero? (mod year 400)) (and (zero? (mod year 4)) (not= 0 (mod year 100))))
        true
        false
    )
)

(defn -leapYear []
    (println "Enter a year: ")
    (def inputYear (Integer. (read-line)))
    (println "--")
    (def i (atom 0))
    (loop [leapYearVector []
           year inputYear]
        (when (< @i 20)
            (if (checkIfLeapYear year)
                (do
                    (conj leapYearVector year)
                    (swap! i inc)
                    (println year)
                ))

            (recur leapYearVector (inc year))
        )
    )
)



