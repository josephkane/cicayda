(ns tech-int.core
  (:gen-class))

; LEAP YEAR

; (and (zero? (mod year 400)) (and (zero? (mod year 4)) (not= (zero? (mod year 100)))))

; (zero? (mod year 400))

; (and (zero? (mod year 4)) (not= (zero? (mod year 100))))



(defn checkIfLeapYear
    [year]
    (println year)
    (if (or (zero? (mod year 400)) (and (zero? (mod year 4)) (not= 0 (mod year 100))))
        true
        false
    )
)

; (defn -leapYear []
;     (println "Enter a year: ")
;     (def inputYear (Integer. (read-line)))
;     (loop [leapYearVector []
;            year inputYear]
;         (when (< (count leapYearVector) 20)
;             (if (checkIfLeapYear year)
;                 (do
;                     (conj leapYearVector year)
;                     (println year)
;                 ))

;             (recur leapYearVector (inc year))
;         )
;     )
; )

(defn leapYear [year]
    (def i (atom 1))
    (while (<= @i 20)
        (do
            (if (checkIfLeapYear year)
                (do
                    (println year)
                    (inc year)
                    (swap! @i inc)
                )
                (inc year)
            )
        )
    )
)


(println "Enter a year: ")
(def inputYear (Integer. (read-line)))
(leapYear inputYear)
