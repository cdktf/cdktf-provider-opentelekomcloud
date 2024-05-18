# `dwsClusterV1` Submodule <a name="`dwsClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.dwsClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DwsClusterV1 <a name="DwsClusterV1" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1 opentelekomcloud_dws_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1;

DwsClusterV1.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .networkId(java.lang.String)
    .nodeType(java.lang.String)
    .numberOfNode(java.lang.Number)
    .securityGroupId(java.lang.String)
    .userName(java.lang.String)
    .userPwd(java.lang.String)
    .vpcId(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .endpoints(IResolvable)
//  .endpoints(java.util.List<DwsClusterV1Endpoints>)
//  .id(java.lang.String)
//  .keepLastManualSnapshot(java.lang.Number)
//  .numberOfCn(java.lang.Number)
//  .port(java.lang.Number)
//  .publicEndpoints(IResolvable)
//  .publicEndpoints(java.util.List<DwsClusterV1PublicEndpoints>)
//  .publicIp(DwsClusterV1PublicIp)
//  .timeouts(DwsClusterV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#name DwsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.numberOfNode">numberOfNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.userPwd">userPwd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>></code> | endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#id DwsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.keepLastManualSnapshot">keepLastManualSnapshot</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.numberOfCn">numberOfCn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#port DwsClusterV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.publicEndpoints">publicEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>></code> | public_endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#name DwsClusterV1#name}.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.networkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}.

---

##### `numberOfNode`<sup>Required</sup> <a name="numberOfNode" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.numberOfNode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}.

---

##### `userPwd`<sup>Required</sup> <a name="userPwd" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.userPwd"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.endpoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#endpoints DwsClusterV1#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#id DwsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepLastManualSnapshot`<sup>Optional</sup> <a name="keepLastManualSnapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.keepLastManualSnapshot"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}.

---

##### `numberOfCn`<sup>Optional</sup> <a name="numberOfCn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.numberOfCn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#port DwsClusterV1#port}.

---

##### `publicEndpoints`<sup>Optional</sup> <a name="publicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.publicEndpoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>>

public_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#public_endpoints DwsClusterV1#public_endpoints}

---

##### `publicIp`<sup>Optional</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.publicIp"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#public_ip DwsClusterV1#public_ip}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#timeouts DwsClusterV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints">putPublicEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp">putPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetKeepLastManualSnapshot">resetKeepLastManualSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetNumberOfCn">resetNumberOfCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicEndpoints">resetPublicEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicIp">resetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints"></a>

```java
public void putEndpoints(IResolvable OR java.util.List<DwsClusterV1Endpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putEndpoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>>

---

##### `putPublicEndpoints` <a name="putPublicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints"></a>

```java
public void putPublicEndpoints(IResolvable OR java.util.List<DwsClusterV1PublicEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicEndpoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>>

---

##### `putPublicIp` <a name="putPublicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp"></a>

```java
public void putPublicIp(DwsClusterV1PublicIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putPublicIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts"></a>

```java
public void putTimeouts(DwsClusterV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetEndpoints"></a>

```java
public void resetEndpoints()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetId"></a>

```java
public void resetId()
```

##### `resetKeepLastManualSnapshot` <a name="resetKeepLastManualSnapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetKeepLastManualSnapshot"></a>

```java
public void resetKeepLastManualSnapshot()
```

##### `resetNumberOfCn` <a name="resetNumberOfCn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetNumberOfCn"></a>

```java
public void resetNumberOfCn()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPort"></a>

```java
public void resetPort()
```

##### `resetPublicEndpoints` <a name="resetPublicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicEndpoints"></a>

```java
public void resetPublicEndpoints()
```

##### `resetPublicIp` <a name="resetPublicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetPublicIp"></a>

```java
public void resetPublicIp()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DwsClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1;

DwsClusterV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1;

DwsClusterV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1;

DwsClusterV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1;

DwsClusterV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DwsClusterV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DwsClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DwsClusterV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DwsClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DwsClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList">DwsClusterV1EndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.privateIp">privateIp</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpoints">publicEndpoints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList">DwsClusterV1PublicEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference">DwsClusterV1PublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.recentEvent">recentEvent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.subStatus">subStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.taskStatus">taskStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference">DwsClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpointsInput">endpointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshotInput">keepLastManualSnapshotInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkIdInput">networkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCnInput">numberOfCnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNodeInput">numberOfNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpointsInput">publicEndpointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIpInput">publicIpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwdInput">userPwdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshot">keepLastManualSnapshot</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCn">numberOfCn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNode">numberOfNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwd">userPwd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpoints"></a>

```java
public DwsClusterV1EndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList">DwsClusterV1EndpointsList</a>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.privateIp"></a>

```java
public java.util.List<java.lang.String> getPrivateIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicEndpoints`<sup>Required</sup> <a name="publicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpoints"></a>

```java
public DwsClusterV1PublicEndpointsList getPublicEndpoints();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList">DwsClusterV1PublicEndpointsList</a>

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIp"></a>

```java
public DwsClusterV1PublicIpOutputReference getPublicIp();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference">DwsClusterV1PublicIpOutputReference</a>

---

##### `recentEvent`<sup>Required</sup> <a name="recentEvent" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.recentEvent"></a>

```java
public java.lang.Number getRecentEvent();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subStatus`<sup>Required</sup> <a name="subStatus" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.subStatus"></a>

```java
public java.lang.String getSubStatus();
```

- *Type:* java.lang.String

---

##### `taskStatus`<sup>Required</sup> <a name="taskStatus" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.taskStatus"></a>

```java
public java.lang.String getTaskStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeouts"></a>

```java
public DwsClusterV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference">DwsClusterV1TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.endpointsInput"></a>

```java
public java.lang.Object getEndpointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keepLastManualSnapshotInput`<sup>Optional</sup> <a name="keepLastManualSnapshotInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshotInput"></a>

```java
public java.lang.Number getKeepLastManualSnapshotInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkIdInput"></a>

```java
public java.lang.String getNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `numberOfCnInput`<sup>Optional</sup> <a name="numberOfCnInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCnInput"></a>

```java
public java.lang.Number getNumberOfCnInput();
```

- *Type:* java.lang.Number

---

##### `numberOfNodeInput`<sup>Optional</sup> <a name="numberOfNodeInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNodeInput"></a>

```java
public java.lang.Number getNumberOfNodeInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publicEndpointsInput`<sup>Optional</sup> <a name="publicEndpointsInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicEndpointsInput"></a>

```java
public java.lang.Object getPublicEndpointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>>

---

##### `publicIpInput`<sup>Optional</sup> <a name="publicIpInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.publicIpInput"></a>

```java
public DwsClusterV1PublicIp getPublicIpInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `userPwdInput`<sup>Optional</sup> <a name="userPwdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwdInput"></a>

```java
public java.lang.String getUserPwdInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keepLastManualSnapshot`<sup>Required</sup> <a name="keepLastManualSnapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.keepLastManualSnapshot"></a>

```java
public java.lang.Number getKeepLastManualSnapshot();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `numberOfCn`<sup>Required</sup> <a name="numberOfCn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfCn"></a>

```java
public java.lang.Number getNumberOfCn();
```

- *Type:* java.lang.Number

---

##### `numberOfNode`<sup>Required</sup> <a name="numberOfNode" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.numberOfNode"></a>

```java
public java.lang.Number getNumberOfNode();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `userPwd`<sup>Required</sup> <a name="userPwd" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.userPwd"></a>

```java
public java.lang.String getUserPwd();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DwsClusterV1Config <a name="DwsClusterV1Config" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1Config;

DwsClusterV1Config.builder()
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
    .name(java.lang.String)
    .networkId(java.lang.String)
    .nodeType(java.lang.String)
    .numberOfNode(java.lang.Number)
    .securityGroupId(java.lang.String)
    .userName(java.lang.String)
    .userPwd(java.lang.String)
    .vpcId(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .endpoints(IResolvable)
//  .endpoints(java.util.List<DwsClusterV1Endpoints>)
//  .id(java.lang.String)
//  .keepLastManualSnapshot(java.lang.Number)
//  .numberOfCn(java.lang.Number)
//  .port(java.lang.Number)
//  .publicEndpoints(IResolvable)
//  .publicEndpoints(java.util.List<DwsClusterV1PublicEndpoints>)
//  .publicIp(DwsClusterV1PublicIp)
//  .timeouts(DwsClusterV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#name DwsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfNode">numberOfNode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userPwd">userPwd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>></code> | endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#id DwsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.keepLastManualSnapshot">keepLastManualSnapshot</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfCn">numberOfCn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#port DwsClusterV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicEndpoints">publicEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>></code> | public_endpoints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#name DwsClusterV1#name}.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#network_id DwsClusterV1#network_id}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#node_type DwsClusterV1#node_type}.

---

##### `numberOfNode`<sup>Required</sup> <a name="numberOfNode" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfNode"></a>

```java
public java.lang.Number getNumberOfNode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#number_of_node DwsClusterV1#number_of_node}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#security_group_id DwsClusterV1#security_group_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#user_name DwsClusterV1#user_name}.

---

##### `userPwd`<sup>Required</sup> <a name="userPwd" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.userPwd"></a>

```java
public java.lang.String getUserPwd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#user_pwd DwsClusterV1#user_pwd}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#vpc_id DwsClusterV1#vpc_id}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#availability_zone DwsClusterV1#availability_zone}.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.endpoints"></a>

```java
public java.lang.Object getEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#endpoints DwsClusterV1#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#id DwsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepLastManualSnapshot`<sup>Optional</sup> <a name="keepLastManualSnapshot" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.keepLastManualSnapshot"></a>

```java
public java.lang.Number getKeepLastManualSnapshot();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#keep_last_manual_snapshot DwsClusterV1#keep_last_manual_snapshot}.

---

##### `numberOfCn`<sup>Optional</sup> <a name="numberOfCn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.numberOfCn"></a>

```java
public java.lang.Number getNumberOfCn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#number_of_cn DwsClusterV1#number_of_cn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#port DwsClusterV1#port}.

---

##### `publicEndpoints`<sup>Optional</sup> <a name="publicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicEndpoints"></a>

```java
public java.lang.Object getPublicEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>>

public_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#public_endpoints DwsClusterV1#public_endpoints}

---

##### `publicIp`<sup>Optional</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.publicIp"></a>

```java
public DwsClusterV1PublicIp getPublicIp();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#public_ip DwsClusterV1#public_ip}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Config.property.timeouts"></a>

```java
public DwsClusterV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#timeouts DwsClusterV1#timeouts}

---

### DwsClusterV1Endpoints <a name="DwsClusterV1Endpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1Endpoints;

DwsClusterV1Endpoints.builder()
    .build();
```


### DwsClusterV1PublicEndpoints <a name="DwsClusterV1PublicEndpoints" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1PublicEndpoints;

DwsClusterV1PublicEndpoints.builder()
    .build();
```


### DwsClusterV1PublicIp <a name="DwsClusterV1PublicIp" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1PublicIp;

DwsClusterV1PublicIp.builder()
//  .eipId(java.lang.String)
//  .publicBindType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.eipId">eipId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#eip_id DwsClusterV1#eip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.publicBindType">publicBindType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#public_bind_type DwsClusterV1#public_bind_type}. |

---

##### `eipId`<sup>Optional</sup> <a name="eipId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.eipId"></a>

```java
public java.lang.String getEipId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#eip_id DwsClusterV1#eip_id}.

---

##### `publicBindType`<sup>Optional</sup> <a name="publicBindType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp.property.publicBindType"></a>

```java
public java.lang.String getPublicBindType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#public_bind_type DwsClusterV1#public_bind_type}.

---

### DwsClusterV1Timeouts <a name="DwsClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1Timeouts;

DwsClusterV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#create DwsClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#delete DwsClusterV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#update DwsClusterV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#create DwsClusterV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#delete DwsClusterV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.9/docs/resources/dws_cluster_v1#update DwsClusterV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DwsClusterV1EndpointsList <a name="DwsClusterV1EndpointsList" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1EndpointsList;

new DwsClusterV1EndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get"></a>

```java
public DwsClusterV1EndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>>

---


### DwsClusterV1EndpointsOutputReference <a name="DwsClusterV1EndpointsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1EndpointsOutputReference;

new DwsClusterV1EndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.connectInfo">connectInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.jdbcUrl">jdbcUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectInfo`<sup>Required</sup> <a name="connectInfo" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.connectInfo"></a>

```java
public java.lang.String getConnectInfo();
```

- *Type:* java.lang.String

---

##### `jdbcUrl`<sup>Required</sup> <a name="jdbcUrl" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.jdbcUrl"></a>

```java
public java.lang.String getJdbcUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1EndpointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Endpoints">DwsClusterV1Endpoints</a>

---


### DwsClusterV1PublicEndpointsList <a name="DwsClusterV1PublicEndpointsList" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1PublicEndpointsList;

new DwsClusterV1PublicEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get"></a>

```java
public DwsClusterV1PublicEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>>

---


### DwsClusterV1PublicEndpointsOutputReference <a name="DwsClusterV1PublicEndpointsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1PublicEndpointsOutputReference;

new DwsClusterV1PublicEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.jdbcUrl">jdbcUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.publicConnectInfo">publicConnectInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jdbcUrl`<sup>Required</sup> <a name="jdbcUrl" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.jdbcUrl"></a>

```java
public java.lang.String getJdbcUrl();
```

- *Type:* java.lang.String

---

##### `publicConnectInfo`<sup>Required</sup> <a name="publicConnectInfo" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.publicConnectInfo"></a>

```java
public java.lang.String getPublicConnectInfo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicEndpoints">DwsClusterV1PublicEndpoints</a>

---


### DwsClusterV1PublicIpOutputReference <a name="DwsClusterV1PublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1PublicIpOutputReference;

new DwsClusterV1PublicIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetEipId">resetEipId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetPublicBindType">resetPublicBindType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEipId` <a name="resetEipId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetEipId"></a>

```java
public void resetEipId()
```

##### `resetPublicBindType` <a name="resetPublicBindType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.resetPublicBindType"></a>

```java
public void resetPublicBindType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipIdInput">eipIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindTypeInput">publicBindTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipId">eipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindType">publicBindType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eipIdInput`<sup>Optional</sup> <a name="eipIdInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipIdInput"></a>

```java
public java.lang.String getEipIdInput();
```

- *Type:* java.lang.String

---

##### `publicBindTypeInput`<sup>Optional</sup> <a name="publicBindTypeInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindTypeInput"></a>

```java
public java.lang.String getPublicBindTypeInput();
```

- *Type:* java.lang.String

---

##### `eipId`<sup>Required</sup> <a name="eipId" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.eipId"></a>

```java
public java.lang.String getEipId();
```

- *Type:* java.lang.String

---

##### `publicBindType`<sup>Required</sup> <a name="publicBindType" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.publicBindType"></a>

```java
public java.lang.String getPublicBindType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIpOutputReference.property.internalValue"></a>

```java
public DwsClusterV1PublicIp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1PublicIp">DwsClusterV1PublicIp</a>

---


### DwsClusterV1TimeoutsOutputReference <a name="DwsClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dws_cluster_v1.DwsClusterV1TimeoutsOutputReference;

new DwsClusterV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dwsClusterV1.DwsClusterV1Timeouts">DwsClusterV1Timeouts</a>

---



