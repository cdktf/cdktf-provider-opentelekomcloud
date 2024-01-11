# `cceClusterV3` Submodule <a name="`cceClusterV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceClusterV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceClusterV3 <a name="CceClusterV3" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3 opentelekomcloud_cce_cluster_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3;

CceClusterV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterType(java.lang.String)
    .containerNetworkType(java.lang.String)
    .flavorId(java.lang.String)
    .name(java.lang.String)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .authenticatingProxy(CceClusterV3AuthenticatingProxy)
//  .authenticatingProxyCa(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .billingMode(java.lang.Number)
//  .clusterVersion(java.lang.String)
//  .containerNetworkCidr(java.lang.String)
//  .deleteAllNetwork(java.lang.String)
//  .deleteAllStorage(java.lang.String)
//  .deleteEfs(java.lang.String)
//  .deleteEni(java.lang.String)
//  .deleteEvs(java.lang.String)
//  .deleteNet(java.lang.String)
//  .deleteObs(java.lang.String)
//  .deleteSfs(java.lang.String)
//  .description(java.lang.String)
//  .eip(java.lang.String)
//  .eniSubnetCidr(java.lang.String)
//  .eniSubnetId(java.lang.String)
//  .extendParam(java.util.Map<java.lang.String, java.lang.String>)
//  .highwaySubnetId(java.lang.String)
//  .id(java.lang.String)
//  .ignoreAddons(java.lang.Boolean)
//  .ignoreAddons(IResolvable)
//  .ignoreCertificateClustersData(java.lang.Boolean)
//  .ignoreCertificateClustersData(IResolvable)
//  .ignoreCertificateUsersData(java.lang.Boolean)
//  .ignoreCertificateUsersData(IResolvable)
//  .kubeProxyMode(java.lang.String)
//  .kubernetesSvcIpRange(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .multiAz(java.lang.Boolean)
//  .multiAz(IResolvable)
//  .noAddons(java.lang.Boolean)
//  .noAddons(IResolvable)
//  .region(java.lang.String)
//  .timeouts(CceClusterV3Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.containerNetworkType">containerNetworkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.flavorId">flavorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#name CceClusterV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticatingProxy">authenticatingProxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | authenticating_proxy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticatingProxyCa">authenticatingProxyCa</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.billingMode">billingMode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.containerNetworkCidr">containerNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteAllNetwork">deleteAllNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteAllStorage">deleteAllStorage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEfs">deleteEfs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEni">deleteEni</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEvs">deleteEvs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteNet">deleteNet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteObs">deleteObs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteSfs">deleteSfs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#description CceClusterV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eip">eip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eniSubnetCidr">eniSubnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eniSubnetId">eniSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.extendParam">extendParam</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.highwaySubnetId">highwaySubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#id CceClusterV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreAddons">ignoreAddons</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreCertificateClustersData">ignoreCertificateClustersData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreCertificateUsersData">ignoreCertificateUsersData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.kubeProxyMode">kubeProxyMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.kubernetesSvcIpRange">kubernetesSvcIpRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.noAddons">noAddons</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#region CceClusterV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.clusterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}.

---

##### `containerNetworkType`<sup>Required</sup> <a name="containerNetworkType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.containerNetworkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}.

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.flavorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#name CceClusterV3#name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}.

---

##### `authenticatingProxy`<sup>Optional</sup> <a name="authenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticatingProxy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

authenticating_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authenticating_proxy CceClusterV3#authenticating_proxy}

---

##### `authenticatingProxyCa`<sup>Optional</sup> <a name="authenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticatingProxyCa"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.authenticationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}.

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.billingMode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.clusterVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}.

---

##### `containerNetworkCidr`<sup>Optional</sup> <a name="containerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.containerNetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}.

---

##### `deleteAllNetwork`<sup>Optional</sup> <a name="deleteAllNetwork" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteAllNetwork"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}.

---

##### `deleteAllStorage`<sup>Optional</sup> <a name="deleteAllStorage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteAllStorage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}.

---

##### `deleteEfs`<sup>Optional</sup> <a name="deleteEfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEfs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}.

---

##### `deleteEni`<sup>Optional</sup> <a name="deleteEni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEni"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}.

---

##### `deleteEvs`<sup>Optional</sup> <a name="deleteEvs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteEvs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}.

---

##### `deleteNet`<sup>Optional</sup> <a name="deleteNet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteNet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}.

---

##### `deleteObs`<sup>Optional</sup> <a name="deleteObs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteObs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}.

---

##### `deleteSfs`<sup>Optional</sup> <a name="deleteSfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.deleteSfs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#description CceClusterV3#description}.

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eip"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}.

---

##### `eniSubnetCidr`<sup>Optional</sup> <a name="eniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eniSubnetCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}.

---

##### `eniSubnetId`<sup>Optional</sup> <a name="eniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.eniSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}.

---

##### `extendParam`<sup>Optional</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.extendParam"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}.

---

##### `highwaySubnetId`<sup>Optional</sup> <a name="highwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.highwaySubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#id CceClusterV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreAddons`<sup>Optional</sup> <a name="ignoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreAddons"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}.

---

##### `ignoreCertificateClustersData`<sup>Optional</sup> <a name="ignoreCertificateClustersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreCertificateClustersData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}.

---

##### `ignoreCertificateUsersData`<sup>Optional</sup> <a name="ignoreCertificateUsersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.ignoreCertificateUsersData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}.

---

##### `kubeProxyMode`<sup>Optional</sup> <a name="kubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.kubeProxyMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}.

---

##### `kubernetesSvcIpRange`<sup>Optional</sup> <a name="kubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.kubernetesSvcIpRange"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.multiAz"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}.

---

##### `noAddons`<sup>Optional</sup> <a name="noAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.noAddons"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#region CceClusterV3#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#timeouts CceClusterV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy">putAuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxy">resetAuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxyCa">resetAuthenticatingProxyCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetBillingMode">resetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetClusterVersion">resetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetContainerNetworkCidr">resetContainerNetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllNetwork">resetDeleteAllNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllStorage">resetDeleteAllStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEfs">resetDeleteEfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEni">resetDeleteEni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEvs">resetDeleteEvs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteNet">resetDeleteNet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteObs">resetDeleteObs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteSfs">resetDeleteSfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEip">resetEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetCidr">resetEniSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetId">resetEniSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetExtendParam">resetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetHighwaySubnetId">resetHighwaySubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreAddons">resetIgnoreAddons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateClustersData">resetIgnoreCertificateClustersData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateUsersData">resetIgnoreCertificateUsersData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubeProxyMode">resetKubeProxyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubernetesSvcIpRange">resetKubernetesSvcIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetNoAddons">resetNoAddons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticatingProxy` <a name="putAuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy"></a>

```java
public void putAuthenticatingProxy(CceClusterV3AuthenticatingProxy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putAuthenticatingProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts"></a>

```java
public void putTimeouts(CceClusterV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAuthenticatingProxy` <a name="resetAuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxy"></a>

```java
public void resetAuthenticatingProxy()
```

##### `resetAuthenticatingProxyCa` <a name="resetAuthenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticatingProxyCa"></a>

```java
public void resetAuthenticatingProxyCa()
```

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetAuthenticationMode"></a>

```java
public void resetAuthenticationMode()
```

##### `resetBillingMode` <a name="resetBillingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetBillingMode"></a>

```java
public void resetBillingMode()
```

##### `resetClusterVersion` <a name="resetClusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetClusterVersion"></a>

```java
public void resetClusterVersion()
```

##### `resetContainerNetworkCidr` <a name="resetContainerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetContainerNetworkCidr"></a>

```java
public void resetContainerNetworkCidr()
```

##### `resetDeleteAllNetwork` <a name="resetDeleteAllNetwork" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllNetwork"></a>

```java
public void resetDeleteAllNetwork()
```

##### `resetDeleteAllStorage` <a name="resetDeleteAllStorage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteAllStorage"></a>

```java
public void resetDeleteAllStorage()
```

##### `resetDeleteEfs` <a name="resetDeleteEfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEfs"></a>

```java
public void resetDeleteEfs()
```

##### `resetDeleteEni` <a name="resetDeleteEni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEni"></a>

```java
public void resetDeleteEni()
```

##### `resetDeleteEvs` <a name="resetDeleteEvs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteEvs"></a>

```java
public void resetDeleteEvs()
```

##### `resetDeleteNet` <a name="resetDeleteNet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteNet"></a>

```java
public void resetDeleteNet()
```

##### `resetDeleteObs` <a name="resetDeleteObs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteObs"></a>

```java
public void resetDeleteObs()
```

##### `resetDeleteSfs` <a name="resetDeleteSfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDeleteSfs"></a>

```java
public void resetDeleteSfs()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEip` <a name="resetEip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEip"></a>

```java
public void resetEip()
```

##### `resetEniSubnetCidr` <a name="resetEniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetCidr"></a>

```java
public void resetEniSubnetCidr()
```

##### `resetEniSubnetId` <a name="resetEniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetEniSubnetId"></a>

```java
public void resetEniSubnetId()
```

##### `resetExtendParam` <a name="resetExtendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetExtendParam"></a>

```java
public void resetExtendParam()
```

##### `resetHighwaySubnetId` <a name="resetHighwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetHighwaySubnetId"></a>

```java
public void resetHighwaySubnetId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreAddons` <a name="resetIgnoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreAddons"></a>

```java
public void resetIgnoreAddons()
```

##### `resetIgnoreCertificateClustersData` <a name="resetIgnoreCertificateClustersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateClustersData"></a>

```java
public void resetIgnoreCertificateClustersData()
```

##### `resetIgnoreCertificateUsersData` <a name="resetIgnoreCertificateUsersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetIgnoreCertificateUsersData"></a>

```java
public void resetIgnoreCertificateUsersData()
```

##### `resetKubeProxyMode` <a name="resetKubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubeProxyMode"></a>

```java
public void resetKubeProxyMode()
```

##### `resetKubernetesSvcIpRange` <a name="resetKubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetKubernetesSvcIpRange"></a>

```java
public void resetKubernetesSvcIpRange()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetMultiAz"></a>

```java
public void resetMultiAz()
```

##### `resetNoAddons` <a name="resetNoAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetNoAddons"></a>

```java
public void resetNoAddons()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CceClusterV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3;

CceClusterV3.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3;

CceClusterV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3;

CceClusterV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3;

CceClusterV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CceClusterV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CceClusterV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CceClusterV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CceClusterV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CceClusterV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxy">authenticatingProxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference">CceClusterV3AuthenticatingProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateClusters">certificateClusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList">CceClusterV3CertificateClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateUsers">certificateUsers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList">CceClusterV3CertificateUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.external">external</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.externalOtc">externalOtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.installedAddons">installedAddons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.internal">internal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupControl">securityGroupControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupNode">securityGroupNode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference">CceClusterV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCaInput">authenticatingProxyCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyInput">authenticatingProxyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingModeInput">billingModeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersionInput">clusterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidrInput">containerNetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkTypeInput">containerNetworkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetworkInput">deleteAllNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorageInput">deleteAllStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfsInput">deleteEfsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEniInput">deleteEniInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvsInput">deleteEvsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNetInput">deleteNetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObsInput">deleteObsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfsInput">deleteSfsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eipInput">eipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidrInput">eniSubnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetIdInput">eniSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParamInput">extendParamInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorIdInput">flavorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetIdInput">highwaySubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddonsInput">ignoreAddonsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersDataInput">ignoreCertificateClustersDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersDataInput">ignoreCertificateUsersDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyModeInput">kubeProxyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRangeInput">kubernetesSvcIpRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAzInput">multiAzInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddonsInput">noAddonsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCa">authenticatingProxyCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingMode">billingMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidr">containerNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkType">containerNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetwork">deleteAllNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorage">deleteAllStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfs">deleteEfs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEni">deleteEni</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvs">deleteEvs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNet">deleteNet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObs">deleteObs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfs">deleteSfs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eip">eip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidr">eniSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetId">eniSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParam">extendParam</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetId">highwaySubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddons">ignoreAddons</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersData">ignoreCertificateClustersData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersData">ignoreCertificateUsersData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyMode">kubeProxyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRange">kubernetesSvcIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddons">noAddons</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticatingProxy`<sup>Required</sup> <a name="authenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxy"></a>

```java
public CceClusterV3AuthenticatingProxyOutputReference getAuthenticatingProxy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference">CceClusterV3AuthenticatingProxyOutputReference</a>

---

##### `certificateClusters`<sup>Required</sup> <a name="certificateClusters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateClusters"></a>

```java
public CceClusterV3CertificateClustersList getCertificateClusters();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList">CceClusterV3CertificateClustersList</a>

---

##### `certificateUsers`<sup>Required</sup> <a name="certificateUsers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.certificateUsers"></a>

```java
public CceClusterV3CertificateUsersList getCertificateUsers();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList">CceClusterV3CertificateUsersList</a>

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.external"></a>

```java
public java.lang.String getExternal();
```

- *Type:* java.lang.String

---

##### `externalOtc`<sup>Required</sup> <a name="externalOtc" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.externalOtc"></a>

```java
public java.lang.String getExternalOtc();
```

- *Type:* java.lang.String

---

##### `installedAddons`<sup>Required</sup> <a name="installedAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.installedAddons"></a>

```java
public java.util.List<java.lang.String> getInstalledAddons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.internal"></a>

```java
public java.lang.String getInternal();
```

- *Type:* java.lang.String

---

##### `securityGroupControl`<sup>Required</sup> <a name="securityGroupControl" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupControl"></a>

```java
public java.lang.String getSecurityGroupControl();
```

- *Type:* java.lang.String

---

##### `securityGroupNode`<sup>Required</sup> <a name="securityGroupNode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.securityGroupNode"></a>

```java
public java.lang.String getSecurityGroupNode();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeouts"></a>

```java
public CceClusterV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference">CceClusterV3TimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authenticatingProxyCaInput`<sup>Optional</sup> <a name="authenticatingProxyCaInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCaInput"></a>

```java
public java.lang.String getAuthenticatingProxyCaInput();
```

- *Type:* java.lang.String

---

##### `authenticatingProxyInput`<sup>Optional</sup> <a name="authenticatingProxyInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyInput"></a>

```java
public CceClusterV3AuthenticatingProxy getAuthenticatingProxyInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `billingModeInput`<sup>Optional</sup> <a name="billingModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingModeInput"></a>

```java
public java.lang.Number getBillingModeInput();
```

- *Type:* java.lang.Number

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterTypeInput"></a>

```java
public java.lang.String getClusterTypeInput();
```

- *Type:* java.lang.String

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersionInput"></a>

```java
public java.lang.String getClusterVersionInput();
```

- *Type:* java.lang.String

---

##### `containerNetworkCidrInput`<sup>Optional</sup> <a name="containerNetworkCidrInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidrInput"></a>

```java
public java.lang.String getContainerNetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `containerNetworkTypeInput`<sup>Optional</sup> <a name="containerNetworkTypeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkTypeInput"></a>

```java
public java.lang.String getContainerNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteAllNetworkInput`<sup>Optional</sup> <a name="deleteAllNetworkInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetworkInput"></a>

```java
public java.lang.String getDeleteAllNetworkInput();
```

- *Type:* java.lang.String

---

##### `deleteAllStorageInput`<sup>Optional</sup> <a name="deleteAllStorageInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorageInput"></a>

```java
public java.lang.String getDeleteAllStorageInput();
```

- *Type:* java.lang.String

---

##### `deleteEfsInput`<sup>Optional</sup> <a name="deleteEfsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfsInput"></a>

```java
public java.lang.String getDeleteEfsInput();
```

- *Type:* java.lang.String

---

##### `deleteEniInput`<sup>Optional</sup> <a name="deleteEniInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEniInput"></a>

```java
public java.lang.String getDeleteEniInput();
```

- *Type:* java.lang.String

---

##### `deleteEvsInput`<sup>Optional</sup> <a name="deleteEvsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvsInput"></a>

```java
public java.lang.String getDeleteEvsInput();
```

- *Type:* java.lang.String

---

##### `deleteNetInput`<sup>Optional</sup> <a name="deleteNetInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNetInput"></a>

```java
public java.lang.String getDeleteNetInput();
```

- *Type:* java.lang.String

---

##### `deleteObsInput`<sup>Optional</sup> <a name="deleteObsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObsInput"></a>

```java
public java.lang.String getDeleteObsInput();
```

- *Type:* java.lang.String

---

##### `deleteSfsInput`<sup>Optional</sup> <a name="deleteSfsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfsInput"></a>

```java
public java.lang.String getDeleteSfsInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eipInput`<sup>Optional</sup> <a name="eipInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eipInput"></a>

```java
public java.lang.String getEipInput();
```

- *Type:* java.lang.String

---

##### `eniSubnetCidrInput`<sup>Optional</sup> <a name="eniSubnetCidrInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidrInput"></a>

```java
public java.lang.String getEniSubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `eniSubnetIdInput`<sup>Optional</sup> <a name="eniSubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetIdInput"></a>

```java
public java.lang.String getEniSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `extendParamInput`<sup>Optional</sup> <a name="extendParamInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParamInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParamInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorIdInput"></a>

```java
public java.lang.String getFlavorIdInput();
```

- *Type:* java.lang.String

---

##### `highwaySubnetIdInput`<sup>Optional</sup> <a name="highwaySubnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetIdInput"></a>

```java
public java.lang.String getHighwaySubnetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreAddonsInput`<sup>Optional</sup> <a name="ignoreAddonsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddonsInput"></a>

```java
public java.lang.Object getIgnoreAddonsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreCertificateClustersDataInput`<sup>Optional</sup> <a name="ignoreCertificateClustersDataInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersDataInput"></a>

```java
public java.lang.Object getIgnoreCertificateClustersDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreCertificateUsersDataInput`<sup>Optional</sup> <a name="ignoreCertificateUsersDataInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersDataInput"></a>

```java
public java.lang.Object getIgnoreCertificateUsersDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kubeProxyModeInput`<sup>Optional</sup> <a name="kubeProxyModeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyModeInput"></a>

```java
public java.lang.String getKubeProxyModeInput();
```

- *Type:* java.lang.String

---

##### `kubernetesSvcIpRangeInput`<sup>Optional</sup> <a name="kubernetesSvcIpRangeInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRangeInput"></a>

```java
public java.lang.String getKubernetesSvcIpRangeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAzInput"></a>

```java
public java.lang.Object getMultiAzInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `noAddonsInput`<sup>Optional</sup> <a name="noAddonsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddonsInput"></a>

```java
public java.lang.Object getNoAddonsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authenticatingProxyCa`<sup>Required</sup> <a name="authenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticatingProxyCa"></a>

```java
public java.lang.String getAuthenticatingProxyCa();
```

- *Type:* java.lang.String

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.billingMode"></a>

```java
public java.lang.Number getBillingMode();
```

- *Type:* java.lang.Number

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

---

##### `containerNetworkCidr`<sup>Required</sup> <a name="containerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkCidr"></a>

```java
public java.lang.String getContainerNetworkCidr();
```

- *Type:* java.lang.String

---

##### `containerNetworkType`<sup>Required</sup> <a name="containerNetworkType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.containerNetworkType"></a>

```java
public java.lang.String getContainerNetworkType();
```

- *Type:* java.lang.String

---

##### `deleteAllNetwork`<sup>Required</sup> <a name="deleteAllNetwork" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllNetwork"></a>

```java
public java.lang.String getDeleteAllNetwork();
```

- *Type:* java.lang.String

---

##### `deleteAllStorage`<sup>Required</sup> <a name="deleteAllStorage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteAllStorage"></a>

```java
public java.lang.String getDeleteAllStorage();
```

- *Type:* java.lang.String

---

##### `deleteEfs`<sup>Required</sup> <a name="deleteEfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEfs"></a>

```java
public java.lang.String getDeleteEfs();
```

- *Type:* java.lang.String

---

##### `deleteEni`<sup>Required</sup> <a name="deleteEni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEni"></a>

```java
public java.lang.String getDeleteEni();
```

- *Type:* java.lang.String

---

##### `deleteEvs`<sup>Required</sup> <a name="deleteEvs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteEvs"></a>

```java
public java.lang.String getDeleteEvs();
```

- *Type:* java.lang.String

---

##### `deleteNet`<sup>Required</sup> <a name="deleteNet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteNet"></a>

```java
public java.lang.String getDeleteNet();
```

- *Type:* java.lang.String

---

##### `deleteObs`<sup>Required</sup> <a name="deleteObs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteObs"></a>

```java
public java.lang.String getDeleteObs();
```

- *Type:* java.lang.String

---

##### `deleteSfs`<sup>Required</sup> <a name="deleteSfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.deleteSfs"></a>

```java
public java.lang.String getDeleteSfs();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eip"></a>

```java
public java.lang.String getEip();
```

- *Type:* java.lang.String

---

##### `eniSubnetCidr`<sup>Required</sup> <a name="eniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetCidr"></a>

```java
public java.lang.String getEniSubnetCidr();
```

- *Type:* java.lang.String

---

##### `eniSubnetId`<sup>Required</sup> <a name="eniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.eniSubnetId"></a>

```java
public java.lang.String getEniSubnetId();
```

- *Type:* java.lang.String

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.extendParam"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParam();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

---

##### `highwaySubnetId`<sup>Required</sup> <a name="highwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.highwaySubnetId"></a>

```java
public java.lang.String getHighwaySubnetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreAddons`<sup>Required</sup> <a name="ignoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreAddons"></a>

```java
public java.lang.Object getIgnoreAddons();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreCertificateClustersData`<sup>Required</sup> <a name="ignoreCertificateClustersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateClustersData"></a>

```java
public java.lang.Object getIgnoreCertificateClustersData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreCertificateUsersData`<sup>Required</sup> <a name="ignoreCertificateUsersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.ignoreCertificateUsersData"></a>

```java
public java.lang.Object getIgnoreCertificateUsersData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kubeProxyMode`<sup>Required</sup> <a name="kubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubeProxyMode"></a>

```java
public java.lang.String getKubeProxyMode();
```

- *Type:* java.lang.String

---

##### `kubernetesSvcIpRange`<sup>Required</sup> <a name="kubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.kubernetesSvcIpRange"></a>

```java
public java.lang.String getKubernetesSvcIpRange();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.multiAz"></a>

```java
public java.lang.Object getMultiAz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `noAddons`<sup>Required</sup> <a name="noAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.noAddons"></a>

```java
public java.lang.Object getNoAddons();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CceClusterV3AuthenticatingProxy <a name="CceClusterV3AuthenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3AuthenticatingProxy;

CceClusterV3AuthenticatingProxy.builder()
    .ca(java.lang.String)
    .cert(java.lang.String)
    .privateKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.ca">ca</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ca CceClusterV3#ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.cert">cert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cert CceClusterV3#cert}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#private_key CceClusterV3#private_key}. |

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.ca"></a>

```java
public java.lang.String getCa();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ca CceClusterV3#ca}.

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cert CceClusterV3#cert}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#private_key CceClusterV3#private_key}.

---

### CceClusterV3CertificateClusters <a name="CceClusterV3CertificateClusters" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3CertificateClusters;

CceClusterV3CertificateClusters.builder()
    .build();
```


### CceClusterV3CertificateUsers <a name="CceClusterV3CertificateUsers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3CertificateUsers;

CceClusterV3CertificateUsers.builder()
    .build();
```


### CceClusterV3Config <a name="CceClusterV3Config" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3Config;

CceClusterV3Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterType(java.lang.String)
    .containerNetworkType(java.lang.String)
    .flavorId(java.lang.String)
    .name(java.lang.String)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .authenticatingProxy(CceClusterV3AuthenticatingProxy)
//  .authenticatingProxyCa(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .billingMode(java.lang.Number)
//  .clusterVersion(java.lang.String)
//  .containerNetworkCidr(java.lang.String)
//  .deleteAllNetwork(java.lang.String)
//  .deleteAllStorage(java.lang.String)
//  .deleteEfs(java.lang.String)
//  .deleteEni(java.lang.String)
//  .deleteEvs(java.lang.String)
//  .deleteNet(java.lang.String)
//  .deleteObs(java.lang.String)
//  .deleteSfs(java.lang.String)
//  .description(java.lang.String)
//  .eip(java.lang.String)
//  .eniSubnetCidr(java.lang.String)
//  .eniSubnetId(java.lang.String)
//  .extendParam(java.util.Map<java.lang.String, java.lang.String>)
//  .highwaySubnetId(java.lang.String)
//  .id(java.lang.String)
//  .ignoreAddons(java.lang.Boolean)
//  .ignoreAddons(IResolvable)
//  .ignoreCertificateClustersData(java.lang.Boolean)
//  .ignoreCertificateClustersData(IResolvable)
//  .ignoreCertificateUsersData(java.lang.Boolean)
//  .ignoreCertificateUsersData(IResolvable)
//  .kubeProxyMode(java.lang.String)
//  .kubernetesSvcIpRange(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .multiAz(java.lang.Boolean)
//  .multiAz(IResolvable)
//  .noAddons(java.lang.Boolean)
//  .noAddons(IResolvable)
//  .region(java.lang.String)
//  .timeouts(CceClusterV3Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkType">containerNetworkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#name CceClusterV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxy">authenticatingProxy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | authenticating_proxy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxyCa">authenticatingProxyCa</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.billingMode">billingMode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkCidr">containerNetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllNetwork">deleteAllNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllStorage">deleteAllStorage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEfs">deleteEfs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEni">deleteEni</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEvs">deleteEvs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteNet">deleteNet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteObs">deleteObs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteSfs">deleteSfs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#description CceClusterV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eip">eip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetCidr">eniSubnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetId">eniSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.extendParam">extendParam</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.highwaySubnetId">highwaySubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#id CceClusterV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreAddons">ignoreAddons</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateClustersData">ignoreCertificateClustersData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateUsersData">ignoreCertificateUsersData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubeProxyMode">kubeProxyMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubernetesSvcIpRange">kubernetesSvcIpRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.noAddons">noAddons</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#region CceClusterV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cluster_type CceClusterV3#cluster_type}.

---

##### `containerNetworkType`<sup>Required</sup> <a name="containerNetworkType" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkType"></a>

```java
public java.lang.String getContainerNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#container_network_type CceClusterV3#container_network_type}.

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#flavor_id CceClusterV3#flavor_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#name CceClusterV3#name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#subnet_id CceClusterV3#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#vpc_id CceClusterV3#vpc_id}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#annotations CceClusterV3#annotations}.

---

##### `authenticatingProxy`<sup>Optional</sup> <a name="authenticatingProxy" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxy"></a>

```java
public CceClusterV3AuthenticatingProxy getAuthenticatingProxy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

authenticating_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authenticating_proxy CceClusterV3#authenticating_proxy}

---

##### `authenticatingProxyCa`<sup>Optional</sup> <a name="authenticatingProxyCa" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticatingProxyCa"></a>

```java
public java.lang.String getAuthenticatingProxyCa();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#authentication_mode CceClusterV3#authentication_mode}.

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.billingMode"></a>

```java
public java.lang.Number getBillingMode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#billing_mode CceClusterV3#billing_mode}.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#cluster_version CceClusterV3#cluster_version}.

---

##### `containerNetworkCidr`<sup>Optional</sup> <a name="containerNetworkCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.containerNetworkCidr"></a>

```java
public java.lang.String getContainerNetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#container_network_cidr CceClusterV3#container_network_cidr}.

---

##### `deleteAllNetwork`<sup>Optional</sup> <a name="deleteAllNetwork" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllNetwork"></a>

```java
public java.lang.String getDeleteAllNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_all_network CceClusterV3#delete_all_network}.

---

##### `deleteAllStorage`<sup>Optional</sup> <a name="deleteAllStorage" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteAllStorage"></a>

```java
public java.lang.String getDeleteAllStorage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_all_storage CceClusterV3#delete_all_storage}.

---

##### `deleteEfs`<sup>Optional</sup> <a name="deleteEfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEfs"></a>

```java
public java.lang.String getDeleteEfs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_efs CceClusterV3#delete_efs}.

---

##### `deleteEni`<sup>Optional</sup> <a name="deleteEni" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEni"></a>

```java
public java.lang.String getDeleteEni();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_eni CceClusterV3#delete_eni}.

---

##### `deleteEvs`<sup>Optional</sup> <a name="deleteEvs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteEvs"></a>

```java
public java.lang.String getDeleteEvs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_evs CceClusterV3#delete_evs}.

---

##### `deleteNet`<sup>Optional</sup> <a name="deleteNet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteNet"></a>

```java
public java.lang.String getDeleteNet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_net CceClusterV3#delete_net}.

---

##### `deleteObs`<sup>Optional</sup> <a name="deleteObs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteObs"></a>

```java
public java.lang.String getDeleteObs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_obs CceClusterV3#delete_obs}.

---

##### `deleteSfs`<sup>Optional</sup> <a name="deleteSfs" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.deleteSfs"></a>

```java
public java.lang.String getDeleteSfs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete_sfs CceClusterV3#delete_sfs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#description CceClusterV3#description}.

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eip"></a>

```java
public java.lang.String getEip();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eip CceClusterV3#eip}.

---

##### `eniSubnetCidr`<sup>Optional</sup> <a name="eniSubnetCidr" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetCidr"></a>

```java
public java.lang.String getEniSubnetCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eni_subnet_cidr CceClusterV3#eni_subnet_cidr}.

---

##### `eniSubnetId`<sup>Optional</sup> <a name="eniSubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.eniSubnetId"></a>

```java
public java.lang.String getEniSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#eni_subnet_id CceClusterV3#eni_subnet_id}.

---

##### `extendParam`<sup>Optional</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.extendParam"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParam();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#extend_param CceClusterV3#extend_param}.

---

##### `highwaySubnetId`<sup>Optional</sup> <a name="highwaySubnetId" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.highwaySubnetId"></a>

```java
public java.lang.String getHighwaySubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#highway_subnet_id CceClusterV3#highway_subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#id CceClusterV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreAddons`<sup>Optional</sup> <a name="ignoreAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreAddons"></a>

```java
public java.lang.Object getIgnoreAddons();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_addons CceClusterV3#ignore_addons}.

---

##### `ignoreCertificateClustersData`<sup>Optional</sup> <a name="ignoreCertificateClustersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateClustersData"></a>

```java
public java.lang.Object getIgnoreCertificateClustersData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_certificate_clusters_data CceClusterV3#ignore_certificate_clusters_data}.

---

##### `ignoreCertificateUsersData`<sup>Optional</sup> <a name="ignoreCertificateUsersData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.ignoreCertificateUsersData"></a>

```java
public java.lang.Object getIgnoreCertificateUsersData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#ignore_certificate_users_data CceClusterV3#ignore_certificate_users_data}.

---

##### `kubeProxyMode`<sup>Optional</sup> <a name="kubeProxyMode" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubeProxyMode"></a>

```java
public java.lang.String getKubeProxyMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#kube_proxy_mode CceClusterV3#kube_proxy_mode}.

---

##### `kubernetesSvcIpRange`<sup>Optional</sup> <a name="kubernetesSvcIpRange" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.kubernetesSvcIpRange"></a>

```java
public java.lang.String getKubernetesSvcIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#labels CceClusterV3#labels}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.multiAz"></a>

```java
public java.lang.Object getMultiAz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#multi_az CceClusterV3#multi_az}.

---

##### `noAddons`<sup>Optional</sup> <a name="noAddons" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.noAddons"></a>

```java
public java.lang.Object getNoAddons();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#no_addons CceClusterV3#no_addons}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#region CceClusterV3#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Config.property.timeouts"></a>

```java
public CceClusterV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#timeouts CceClusterV3#timeouts}

---

### CceClusterV3Timeouts <a name="CceClusterV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3Timeouts;

CceClusterV3Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#create CceClusterV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#create CceClusterV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.16/docs/resources/cce_cluster_v3#delete CceClusterV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceClusterV3AuthenticatingProxyOutputReference <a name="CceClusterV3AuthenticatingProxyOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3AuthenticatingProxyOutputReference;

new CceClusterV3AuthenticatingProxyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.caInput">caInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.ca">ca</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caInput`<sup>Optional</sup> <a name="caInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.caInput"></a>

```java
public java.lang.String getCaInput();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.ca"></a>

```java
public java.lang.String getCa();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxyOutputReference.property.internalValue"></a>

```java
public CceClusterV3AuthenticatingProxy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3AuthenticatingProxy">CceClusterV3AuthenticatingProxy</a>

---


### CceClusterV3CertificateClustersList <a name="CceClusterV3CertificateClustersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3CertificateClustersList;

new CceClusterV3CertificateClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get"></a>

```java
public CceClusterV3CertificateClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CceClusterV3CertificateClustersOutputReference <a name="CceClusterV3CertificateClustersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3CertificateClustersOutputReference;

new CceClusterV3CertificateClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData">certificateAuthorityData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters">CceClusterV3CertificateClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityData`<sup>Required</sup> <a name="certificateAuthorityData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.certificateAuthorityData"></a>

```java
public java.lang.String getCertificateAuthorityData();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClustersOutputReference.property.internalValue"></a>

```java
public CceClusterV3CertificateClusters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateClusters">CceClusterV3CertificateClusters</a>

---


### CceClusterV3CertificateUsersList <a name="CceClusterV3CertificateUsersList" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3CertificateUsersList;

new CceClusterV3CertificateUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get"></a>

```java
public CceClusterV3CertificateUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CceClusterV3CertificateUsersOutputReference <a name="CceClusterV3CertificateUsersOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3CertificateUsersOutputReference;

new CceClusterV3CertificateUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientCertificateData">clientCertificateData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientKeyData">clientKeyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers">CceClusterV3CertificateUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificateData`<sup>Required</sup> <a name="clientCertificateData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientCertificateData"></a>

```java
public java.lang.String getClientCertificateData();
```

- *Type:* java.lang.String

---

##### `clientKeyData`<sup>Required</sup> <a name="clientKeyData" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.clientKeyData"></a>

```java
public java.lang.String getClientKeyData();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsersOutputReference.property.internalValue"></a>

```java
public CceClusterV3CertificateUsers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3CertificateUsers">CceClusterV3CertificateUsers</a>

---


### CceClusterV3TimeoutsOutputReference <a name="CceClusterV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_cluster_v3.CceClusterV3TimeoutsOutputReference;

new CceClusterV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.cceClusterV3.CceClusterV3Timeouts">CceClusterV3Timeouts</a>

---



