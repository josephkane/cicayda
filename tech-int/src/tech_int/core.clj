(ns tech-int.core
  (:gen-class))

(defn -leapYear
  [& args]
  (println "Enter a year: ")
  (def inputYear (read-line))
  (println (str "You entered " inputYear " as the start year."))
  )
