# FanOfCucumbers
>>> A .NET web application aims to mange some data visualization librairies based on public data.


### - Launch
##### - 1/ Clone the repository

```bash
git clone https://github.com/NajlaBioinfo/dotnetdockerdemo.git
```

##### - 2/ Run the web application

###### a) First method :
```bash
cd DotnetDockerDemo/DotnetDockerDemo
dotnet run
```	

###### b) Second method : From Visual studio
	* Open the "dotnetdockerdemo" project.
	* Run the "docker-compose.yml" file located in the project.
	
###### c) Third mehtod : Terminal / Docker

```bash
cd dotnetdockerdemo
docker build -t dotnet-docker-demo .
docker run -it --rm --name mycontainer -p 8080:8080 -p 5000:5000 -p 5001:5001 dotnet-docker-demo:latest
docker inspect --format '{{ .NetworkSettings.IPAddress }}' mycontainer
```
a) You should see the web app at "https://localhost:5001"
You may have to trust the website if you browse with FireFox.
b)
=> You should see the web app at "https://localhost:44329/". 
You may have to trust the website because it self-signed.
c)
=> You should see the web app at "https://containerIP"
This method is unavailable with docker-mac.

### - References
* https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/docker/building-net-docker-images?view=aspnetcore-3.1

### - License
MIT
