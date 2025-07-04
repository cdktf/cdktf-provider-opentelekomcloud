# `dcsInstanceV1` Submodule <a name="`dcsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcsInstanceV1 <a name="DcsInstanceV1" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1 opentelekomcloud_dcs_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1;

DcsInstanceV1.Builder.create(Construct scope, java.lang.String id)
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
    .availableZones(java.util.List<java.lang.String>)
    .capacity(java.lang.Number)
    .engine(java.lang.String)
    .engineVersion(java.lang.String)
    .name(java.lang.String)
    .productId(java.lang.String)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .backupAt(java.util.List<java.lang.Number>)
//  .backupPolicy(DcsInstanceV1BackupPolicy)
//  .backupType(java.lang.String)
//  .beginAt(java.lang.String)
//  .configuration(IResolvable)
//  .configuration(java.util.List<DcsInstanceV1Configuration>)
//  .description(java.lang.String)
//  .enableWhitelist(java.lang.Boolean)
//  .enableWhitelist(IResolvable)
//  .id(java.lang.String)
//  .maintainBegin(java.lang.String)
//  .maintainEnd(java.lang.String)
//  .password(java.lang.String)
//  .periodType(java.lang.String)
//  .privateIp(java.lang.String)
//  .saveDays(java.lang.Number)
//  .securityGroupId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DcsInstanceV1Timeouts)
//  .whitelist(IResolvable)
//  .whitelist(java.util.List<DcsInstanceV1WhitelistStruct>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupAt">backupAt</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupType">backupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.beginAt">beginAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.enableWhitelist">enableWhitelist</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.maintainEnd">maintainEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.periodType">periodType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#private_ip DcsInstanceV1#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.saveDays">saveDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#tags DcsInstanceV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.whitelist">whitelist</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>></code> | whitelist block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availableZones`<sup>Required</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.availableZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.capacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}.

---

##### `backupAt`<sup>Optional</sup> <a name="backupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupAt"></a>

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_policy DcsInstanceV1#backup_policy}

---

##### `backupType`<sup>Optional</sup> <a name="backupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.backupType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

##### `beginAt`<sup>Optional</sup> <a name="beginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.beginAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.configuration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#configuration DcsInstanceV1#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}.

---

##### `enableWhitelist`<sup>Optional</sup> <a name="enableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.enableWhitelist"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainBegin`<sup>Optional</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.maintainBegin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}.

---

##### `maintainEnd`<sup>Optional</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.maintainEnd"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}.

---

##### `periodType`<sup>Optional</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.periodType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.privateIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#private_ip DcsInstanceV1#private_ip}.

---

##### `saveDays`<sup>Optional</sup> <a name="saveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.saveDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#tags DcsInstanceV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#timeouts DcsInstanceV1#timeouts}

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.Initializer.parameter.whitelist"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>>

whitelist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#whitelist DcsInstanceV1#whitelist}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy">putBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist">putWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupAt">resetBackupAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupPolicy">resetBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupType">resetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBeginAt">resetBeginAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetEnableWhitelist">resetEnableWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainBegin">resetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainEnd">resetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPeriodType">resetPeriodType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSaveDays">resetSaveDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetWhitelist">resetWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPolicy` <a name="putBackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy"></a>

```java
public void putBackupPolicy(DcsInstanceV1BackupPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration"></a>

```java
public void putConfiguration(IResolvable OR java.util.List<DcsInstanceV1Configuration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts"></a>

```java
public void putTimeouts(DcsInstanceV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

---

##### `putWhitelist` <a name="putWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist"></a>

```java
public void putWhitelist(IResolvable OR java.util.List<DcsInstanceV1WhitelistStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.putWhitelist.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>>

---

##### `resetBackupAt` <a name="resetBackupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupAt"></a>

```java
public void resetBackupAt()
```

##### `resetBackupPolicy` <a name="resetBackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupPolicy"></a>

```java
public void resetBackupPolicy()
```

##### `resetBackupType` <a name="resetBackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBackupType"></a>

```java
public void resetBackupType()
```

##### `resetBeginAt` <a name="resetBeginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetBeginAt"></a>

```java
public void resetBeginAt()
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableWhitelist` <a name="resetEnableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetEnableWhitelist"></a>

```java
public void resetEnableWhitelist()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetId"></a>

```java
public void resetId()
```

##### `resetMaintainBegin` <a name="resetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainBegin"></a>

```java
public void resetMaintainBegin()
```

##### `resetMaintainEnd` <a name="resetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetMaintainEnd"></a>

```java
public void resetMaintainEnd()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPeriodType` <a name="resetPeriodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPeriodType"></a>

```java
public void resetPeriodType()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetSaveDays` <a name="resetSaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSaveDays"></a>

```java
public void resetSaveDays()
```

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetSecurityGroupId"></a>

```java
public void resetSecurityGroupId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWhitelist` <a name="resetWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.resetWhitelist"></a>

```java
public void resetWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcsInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1;

DcsInstanceV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1;

DcsInstanceV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1;

DcsInstanceV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1;

DcsInstanceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DcsInstanceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DcsInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DcsInstanceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DcsInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DcsInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference">DcsInstanceV1BackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList">DcsInstanceV1ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.internalVersion">internalVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maxMemory">maxMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.noPasswordAccess">noPasswordAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.orderId">orderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.resourceSpecCode">resourceSpecCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupName">securityGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetName">subnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference">DcsInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.usedMemory">usedMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcName">vpcName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelist">whitelist</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList">DcsInstanceV1WhitelistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZonesInput">availableZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAtInput">backupAtInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicyInput">backupPolicyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupTypeInput">backupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAtInput">beginAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configurationInput">configurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelistInput">enableWhitelistInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBeginInput">maintainBeginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEndInput">maintainEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodTypeInput">periodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDaysInput">saveDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelistInput">whitelistInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAt">backupAt</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupType">backupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAt">beginAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelist">enableWhitelist</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEnd">maintainEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodType">periodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDays">saveDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicy"></a>

```java
public DcsInstanceV1BackupPolicyOutputReference getBackupPolicy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference">DcsInstanceV1BackupPolicyOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configuration"></a>

```java
public DcsInstanceV1ConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList">DcsInstanceV1ConfigurationList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `internalVersion`<sup>Required</sup> <a name="internalVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.internalVersion"></a>

```java
public java.lang.String getInternalVersion();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `maxMemory`<sup>Required</sup> <a name="maxMemory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maxMemory"></a>

```java
public java.lang.Number getMaxMemory();
```

- *Type:* java.lang.Number

---

##### `noPasswordAccess`<sup>Required</sup> <a name="noPasswordAccess" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.noPasswordAccess"></a>

```java
public java.lang.String getNoPasswordAccess();
```

- *Type:* java.lang.String

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `resourceSpecCode`<sup>Required</sup> <a name="resourceSpecCode" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.resourceSpecCode"></a>

```java
public java.lang.String getResourceSpecCode();
```

- *Type:* java.lang.String

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupName"></a>

```java
public java.lang.String getSecurityGroupName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetName"></a>

```java
public java.lang.String getSubnetName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeouts"></a>

```java
public DcsInstanceV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference">DcsInstanceV1TimeoutsOutputReference</a>

---

##### `usedMemory`<sup>Required</sup> <a name="usedMemory" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.usedMemory"></a>

```java
public java.lang.Number getUsedMemory();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcName"></a>

```java
public java.lang.String getVpcName();
```

- *Type:* java.lang.String

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelist"></a>

```java
public DcsInstanceV1WhitelistStructList getWhitelist();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList">DcsInstanceV1WhitelistStructList</a>

---

##### `availableZonesInput`<sup>Optional</sup> <a name="availableZonesInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailableZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupAtInput`<sup>Optional</sup> <a name="backupAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAtInput"></a>

```java
public java.util.List<java.lang.Number> getBackupAtInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `backupPolicyInput`<sup>Optional</sup> <a name="backupPolicyInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupPolicyInput"></a>

```java
public DcsInstanceV1BackupPolicy getBackupPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

---

##### `backupTypeInput`<sup>Optional</sup> <a name="backupTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupTypeInput"></a>

```java
public java.lang.String getBackupTypeInput();
```

- *Type:* java.lang.String

---

##### `beginAtInput`<sup>Optional</sup> <a name="beginAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAtInput"></a>

```java
public java.lang.String getBeginAtInput();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.configurationInput"></a>

```java
public java.lang.Object getConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableWhitelistInput`<sup>Optional</sup> <a name="enableWhitelistInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelistInput"></a>

```java
public java.lang.Object getEnableWhitelistInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintainBeginInput`<sup>Optional</sup> <a name="maintainBeginInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBeginInput"></a>

```java
public java.lang.String getMaintainBeginInput();
```

- *Type:* java.lang.String

---

##### `maintainEndInput`<sup>Optional</sup> <a name="maintainEndInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEndInput"></a>

```java
public java.lang.String getMaintainEndInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `periodTypeInput`<sup>Optional</sup> <a name="periodTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodTypeInput"></a>

```java
public java.lang.String getPeriodTypeInput();
```

- *Type:* java.lang.String

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `saveDaysInput`<sup>Optional</sup> <a name="saveDaysInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDaysInput"></a>

```java
public java.lang.Number getSaveDaysInput();
```

- *Type:* java.lang.Number

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `whitelistInput`<sup>Optional</sup> <a name="whitelistInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.whitelistInput"></a>

```java
public java.lang.Object getWhitelistInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>>

---

##### `availableZones`<sup>Required</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.availableZones"></a>

```java
public java.util.List<java.lang.String> getAvailableZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupAt`<sup>Required</sup> <a name="backupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupAt"></a>

```java
public java.util.List<java.lang.Number> getBackupAt();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

---

##### `beginAt`<sup>Required</sup> <a name="beginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.beginAt"></a>

```java
public java.lang.String getBeginAt();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableWhitelist`<sup>Required</sup> <a name="enableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.enableWhitelist"></a>

```java
public java.lang.Object getEnableWhitelist();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintainBegin`<sup>Required</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainBegin"></a>

```java
public java.lang.String getMaintainBegin();
```

- *Type:* java.lang.String

---

##### `maintainEnd`<sup>Required</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.maintainEnd"></a>

```java
public java.lang.String getMaintainEnd();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.periodType"></a>

```java
public java.lang.String getPeriodType();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `saveDays`<sup>Required</sup> <a name="saveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.saveDays"></a>

```java
public java.lang.Number getSaveDays();
```

- *Type:* java.lang.Number

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DcsInstanceV1BackupPolicy <a name="DcsInstanceV1BackupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1BackupPolicy;

DcsInstanceV1BackupPolicy.builder()
    .backupAt(java.util.List<java.lang.Number>)
    .beginAt(java.lang.String)
    .periodType(java.lang.String)
//  .backupType(java.lang.String)
//  .saveDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupAt">backupAt</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.beginAt">beginAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.periodType">periodType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupType">backupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.saveDays">saveDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}. |

---

##### `backupAt`<sup>Required</sup> <a name="backupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupAt"></a>

```java
public java.util.List<java.lang.Number> getBackupAt();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

##### `beginAt`<sup>Required</sup> <a name="beginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.beginAt"></a>

```java
public java.lang.String getBeginAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.periodType"></a>

```java
public java.lang.String getPeriodType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

##### `backupType`<sup>Optional</sup> <a name="backupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

##### `saveDays`<sup>Optional</sup> <a name="saveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy.property.saveDays"></a>

```java
public java.lang.Number getSaveDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

### DcsInstanceV1Config <a name="DcsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1Config;

DcsInstanceV1Config.builder()
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
    .availableZones(java.util.List<java.lang.String>)
    .capacity(java.lang.Number)
    .engine(java.lang.String)
    .engineVersion(java.lang.String)
    .name(java.lang.String)
    .productId(java.lang.String)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .backupAt(java.util.List<java.lang.Number>)
//  .backupPolicy(DcsInstanceV1BackupPolicy)
//  .backupType(java.lang.String)
//  .beginAt(java.lang.String)
//  .configuration(IResolvable)
//  .configuration(java.util.List<DcsInstanceV1Configuration>)
//  .description(java.lang.String)
//  .enableWhitelist(java.lang.Boolean)
//  .enableWhitelist(IResolvable)
//  .id(java.lang.String)
//  .maintainBegin(java.lang.String)
//  .maintainEnd(java.lang.String)
//  .password(java.lang.String)
//  .periodType(java.lang.String)
//  .privateIp(java.lang.String)
//  .saveDays(java.lang.Number)
//  .securityGroupId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DcsInstanceV1Timeouts)
//  .whitelist(IResolvable)
//  .whitelist(java.util.List<DcsInstanceV1WhitelistStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupAt">backupAt</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupPolicy">backupPolicy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | backup_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupType">backupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.beginAt">beginAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.enableWhitelist">enableWhitelist</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainBegin">maintainBegin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainEnd">maintainEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.periodType">periodType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#private_ip DcsInstanceV1#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.saveDays">saveDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#tags DcsInstanceV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.whitelist">whitelist</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>></code> | whitelist block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availableZones`<sup>Required</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.availableZones"></a>

```java
public java.util.List<java.lang.String> getAvailableZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#available_zones DcsInstanceV1#available_zones}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#capacity DcsInstanceV1#capacity}.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#engine DcsInstanceV1#engine}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#engine_version DcsInstanceV1#engine_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#name DcsInstanceV1#name}.

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#product_id DcsInstanceV1#product_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#subnet_id DcsInstanceV1#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#vpc_id DcsInstanceV1#vpc_id}.

---

##### `backupAt`<sup>Optional</sup> <a name="backupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupAt"></a>

```java
public java.util.List<java.lang.Number> getBackupAt();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_at DcsInstanceV1#backup_at}.

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupPolicy"></a>

```java
public DcsInstanceV1BackupPolicy getBackupPolicy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_policy DcsInstanceV1#backup_policy}

---

##### `backupType`<sup>Optional</sup> <a name="backupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#backup_type DcsInstanceV1#backup_type}.

---

##### `beginAt`<sup>Optional</sup> <a name="beginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.beginAt"></a>

```java
public java.lang.String getBeginAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#begin_at DcsInstanceV1#begin_at}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.configuration"></a>

```java
public java.lang.Object getConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#configuration DcsInstanceV1#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#description DcsInstanceV1#description}.

---

##### `enableWhitelist`<sup>Optional</sup> <a name="enableWhitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.enableWhitelist"></a>

```java
public java.lang.Object getEnableWhitelist();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#enable_whitelist DcsInstanceV1#enable_whitelist}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#id DcsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainBegin`<sup>Optional</sup> <a name="maintainBegin" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainBegin"></a>

```java
public java.lang.String getMaintainBegin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#maintain_begin DcsInstanceV1#maintain_begin}.

---

##### `maintainEnd`<sup>Optional</sup> <a name="maintainEnd" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.maintainEnd"></a>

```java
public java.lang.String getMaintainEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#maintain_end DcsInstanceV1#maintain_end}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#password DcsInstanceV1#password}.

---

##### `periodType`<sup>Optional</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.periodType"></a>

```java
public java.lang.String getPeriodType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#period_type DcsInstanceV1#period_type}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#private_ip DcsInstanceV1#private_ip}.

---

##### `saveDays`<sup>Optional</sup> <a name="saveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.saveDays"></a>

```java
public java.lang.Number getSaveDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#save_days DcsInstanceV1#save_days}.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#security_group_id DcsInstanceV1#security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#tags DcsInstanceV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.timeouts"></a>

```java
public DcsInstanceV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#timeouts DcsInstanceV1#timeouts}

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Config.property.whitelist"></a>

```java
public java.lang.Object getWhitelist();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>>

whitelist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#whitelist DcsInstanceV1#whitelist}

---

### DcsInstanceV1Configuration <a name="DcsInstanceV1Configuration" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1Configuration;

DcsInstanceV1Configuration.builder()
    .parameterId(java.lang.String)
    .parameterName(java.lang.String)
    .parameterValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#parameter_id DcsInstanceV1#parameter_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#parameter_name DcsInstanceV1#parameter_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#parameter_value DcsInstanceV1#parameter_value}. |

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#parameter_id DcsInstanceV1#parameter_id}.

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#parameter_name DcsInstanceV1#parameter_name}.

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#parameter_value DcsInstanceV1#parameter_value}.

---

### DcsInstanceV1Timeouts <a name="DcsInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1Timeouts;

DcsInstanceV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#create DcsInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#delete DcsInstanceV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#update DcsInstanceV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#create DcsInstanceV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#delete DcsInstanceV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#update DcsInstanceV1#update}.

---

### DcsInstanceV1WhitelistStruct <a name="DcsInstanceV1WhitelistStruct" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1WhitelistStruct;

DcsInstanceV1WhitelistStruct.builder()
    .groupName(java.lang.String)
    .ipList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#group_name DcsInstanceV1#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#ip_list DcsInstanceV1#ip_list}. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#group_name DcsInstanceV1#group_name}.

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.42/docs/resources/dcs_instance_v1#ip_list DcsInstanceV1#ip_list}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcsInstanceV1BackupPolicyOutputReference <a name="DcsInstanceV1BackupPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1BackupPolicyOutputReference;

new DcsInstanceV1BackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetBackupType">resetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetSaveDays">resetSaveDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupType` <a name="resetBackupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetBackupType"></a>

```java
public void resetBackupType()
```

##### `resetSaveDays` <a name="resetSaveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.resetSaveDays"></a>

```java
public void resetSaveDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAtInput">backupAtInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupTypeInput">backupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAtInput">beginAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodTypeInput">periodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDaysInput">saveDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAt">backupAt</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupType">backupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAt">beginAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodType">periodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDays">saveDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupAtInput`<sup>Optional</sup> <a name="backupAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAtInput"></a>

```java
public java.util.List<java.lang.Number> getBackupAtInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `backupTypeInput`<sup>Optional</sup> <a name="backupTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupTypeInput"></a>

```java
public java.lang.String getBackupTypeInput();
```

- *Type:* java.lang.String

---

##### `beginAtInput`<sup>Optional</sup> <a name="beginAtInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAtInput"></a>

```java
public java.lang.String getBeginAtInput();
```

- *Type:* java.lang.String

---

##### `periodTypeInput`<sup>Optional</sup> <a name="periodTypeInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodTypeInput"></a>

```java
public java.lang.String getPeriodTypeInput();
```

- *Type:* java.lang.String

---

##### `saveDaysInput`<sup>Optional</sup> <a name="saveDaysInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDaysInput"></a>

```java
public java.lang.Number getSaveDaysInput();
```

- *Type:* java.lang.Number

---

##### `backupAt`<sup>Required</sup> <a name="backupAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupAt"></a>

```java
public java.util.List<java.lang.Number> getBackupAt();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

---

##### `beginAt`<sup>Required</sup> <a name="beginAt" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.beginAt"></a>

```java
public java.lang.String getBeginAt();
```

- *Type:* java.lang.String

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.periodType"></a>

```java
public java.lang.String getPeriodType();
```

- *Type:* java.lang.String

---

##### `saveDays`<sup>Required</sup> <a name="saveDays" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.saveDays"></a>

```java
public java.lang.Number getSaveDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicyOutputReference.property.internalValue"></a>

```java
public DcsInstanceV1BackupPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1BackupPolicy">DcsInstanceV1BackupPolicy</a>

---


### DcsInstanceV1ConfigurationList <a name="DcsInstanceV1ConfigurationList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1ConfigurationList;

new DcsInstanceV1ConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get"></a>

```java
public DcsInstanceV1ConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>>

---


### DcsInstanceV1ConfigurationOutputReference <a name="DcsInstanceV1ConfigurationOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1ConfigurationOutputReference;

new DcsInstanceV1ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterIdInput">parameterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterIdInput`<sup>Optional</sup> <a name="parameterIdInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterIdInput"></a>

```java
public java.lang.String getParameterIdInput();
```

- *Type:* java.lang.String

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterNameInput"></a>

```java
public java.lang.String getParameterNameInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValueInput"></a>

```java
public java.lang.String getParameterValueInput();
```

- *Type:* java.lang.String

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1ConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Configuration">DcsInstanceV1Configuration</a>

---


### DcsInstanceV1TimeoutsOutputReference <a name="DcsInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1TimeoutsOutputReference;

new DcsInstanceV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1Timeouts">DcsInstanceV1Timeouts</a>

---


### DcsInstanceV1WhitelistStructList <a name="DcsInstanceV1WhitelistStructList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1WhitelistStructList;

new DcsInstanceV1WhitelistStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get"></a>

```java
public DcsInstanceV1WhitelistStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>>

---


### DcsInstanceV1WhitelistStructOutputReference <a name="DcsInstanceV1WhitelistStructOutputReference" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dcs_instance_v1.DcsInstanceV1WhitelistStructOutputReference;

new DcsInstanceV1WhitelistStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dcsInstanceV1.DcsInstanceV1WhitelistStruct">DcsInstanceV1WhitelistStruct</a>

---



