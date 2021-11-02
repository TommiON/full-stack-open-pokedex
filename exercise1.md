I pick up Java as the the chosen language here.

For linting, the most well-known choice would probably be Checkstyle, as it is a widely used and therefore well supported tool for static analysis in Java.

Choice of testing tools depend on actual nature of the software under construction, but JUnit would be the obvious choice for unit testing, possibly accompanied by Mockito for handling mocks.

Building would be done with either Maven or Gradle, with the first one being the more established (an older) option, and the latter newer and arguably better, although not so familiar to many (including me).

For CI, there seems to be surprisingly many options in Java world, besides Jenkins and Github Actions. One possibility is TeamCity, which would be interesting especially if IDE of choice is IntelliJ (they come from the same vendor). Another one, possibly quite popular in Java circles, is CircleCI.

A cloud-base solution sounds better because the team is small and the timetable is tight. Cloud-based solution would probably get the team going faster and with less pain. Of course, things could be different if, for instance, there would be expertise in the team for a certain self-hosted solution already, or if some technological or business reasons about the software (some exotic roadmap going forward) would prohibit cloud.

