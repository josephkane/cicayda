(ns tech-int.core
  (:gen-class))

(defn -leapYear
  []
  (println "Enter a year: ")
  (def inputYear (Integer. (read-line)))
  (println (str "You entered " inputYear "!"))
  (println (type inputYear))
)
