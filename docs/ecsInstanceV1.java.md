# `ecsInstanceV1` Submodule <a name="`ecsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsInstanceV1 <a name="EcsInstanceV1" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1 opentelekomcloud_ecs_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1;

EcsInstanceV1.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityZone(java.lang.String)
    .flavor(java.lang.String)
    .imageId(java.lang.String)
    .name(java.lang.String)
    .nics(IResolvable)
    .nics(java.util.List<EcsInstanceV1Nics>)
    .vpcId(java.lang.String)
//  .autoRecovery(java.lang.Boolean)
//  .autoRecovery(IResolvable)
//  .dataDisks(IResolvable)
//  .dataDisks(java.util.List<EcsInstanceV1DataDisks>)
//  .deleteDisksOnTermination(java.lang.Boolean)
//  .deleteDisksOnTermination(IResolvable)
//  .id(java.lang.String)
//  .keyName(java.lang.String)
//  .password(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .systemDiskKmsId(java.lang.String)
//  .systemDiskSize(java.lang.Number)
//  .systemDiskType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EcsInstanceV1Timeouts)
//  .userData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#availability_zone EcsInstanceV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#flavor EcsInstanceV1#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#image_id EcsInstanceV1#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#name EcsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.nics">nics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>></code> | nics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#vpc_id EcsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.autoRecovery">autoRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#auto_recovery EcsInstanceV1#auto_recovery}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.dataDisks">dataDisks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>></code> | data_disks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.deleteDisksOnTermination">deleteDisksOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#delete_disks_on_termination EcsInstanceV1#delete_disks_on_termination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#id EcsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#key_name EcsInstanceV1#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#password EcsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#security_groups EcsInstanceV1#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.systemDiskKmsId">systemDiskKmsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_kms_id EcsInstanceV1#system_disk_kms_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.systemDiskSize">systemDiskSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_size EcsInstanceV1#system_disk_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.systemDiskType">systemDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_type EcsInstanceV1#system_disk_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#tags EcsInstanceV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#user_data EcsInstanceV1#user_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#availability_zone EcsInstanceV1#availability_zone}.

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.flavor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#flavor EcsInstanceV1#flavor}.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#image_id EcsInstanceV1#image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#name EcsInstanceV1#name}.

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.nics"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>>

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#nics EcsInstanceV1#nics}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#vpc_id EcsInstanceV1#vpc_id}.

---

##### `autoRecovery`<sup>Optional</sup> <a name="autoRecovery" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.autoRecovery"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#auto_recovery EcsInstanceV1#auto_recovery}.

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.dataDisks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#data_disks EcsInstanceV1#data_disks}

---

##### `deleteDisksOnTermination`<sup>Optional</sup> <a name="deleteDisksOnTermination" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.deleteDisksOnTermination"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#delete_disks_on_termination EcsInstanceV1#delete_disks_on_termination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#id EcsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#key_name EcsInstanceV1#key_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#password EcsInstanceV1#password}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#security_groups EcsInstanceV1#security_groups}.

---

##### `systemDiskKmsId`<sup>Optional</sup> <a name="systemDiskKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.systemDiskKmsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_kms_id EcsInstanceV1#system_disk_kms_id}.

---

##### `systemDiskSize`<sup>Optional</sup> <a name="systemDiskSize" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.systemDiskSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_size EcsInstanceV1#system_disk_size}.

---

##### `systemDiskType`<sup>Optional</sup> <a name="systemDiskType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.systemDiskType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_type EcsInstanceV1#system_disk_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#tags EcsInstanceV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#timeouts EcsInstanceV1#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#user_data EcsInstanceV1#user_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putDataDisks">putDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putNics">putNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetAutoRecovery">resetAutoRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetDataDisks">resetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetDeleteDisksOnTermination">resetDeleteDisksOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskKmsId">resetSystemDiskKmsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskSize">resetSystemDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskType">resetSystemDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataDisks` <a name="putDataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putDataDisks"></a>

```java
public void putDataDisks(IResolvable OR java.util.List<EcsInstanceV1DataDisks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putDataDisks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>>

---

##### `putNics` <a name="putNics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putNics"></a>

```java
public void putNics(IResolvable OR java.util.List<EcsInstanceV1Nics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putNics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putTimeouts"></a>

```java
public void putTimeouts(EcsInstanceV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

---

##### `resetAutoRecovery` <a name="resetAutoRecovery" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetAutoRecovery"></a>

```java
public void resetAutoRecovery()
```

##### `resetDataDisks` <a name="resetDataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetDataDisks"></a>

```java
public void resetDataDisks()
```

##### `resetDeleteDisksOnTermination` <a name="resetDeleteDisksOnTermination" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetDeleteDisksOnTermination"></a>

```java
public void resetDeleteDisksOnTermination()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetId"></a>

```java
public void resetId()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSystemDiskKmsId` <a name="resetSystemDiskKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskKmsId"></a>

```java
public void resetSystemDiskKmsId()
```

##### `resetSystemDiskSize` <a name="resetSystemDiskSize" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskSize"></a>

```java
public void resetSystemDiskSize()
```

##### `resetSystemDiskType` <a name="resetSystemDiskType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetSystemDiskType"></a>

```java
public void resetSystemDiskType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.resetUserData"></a>

```java
public void resetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcsInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1;

EcsInstanceV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1;

EcsInstanceV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1;

EcsInstanceV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1;

EcsInstanceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcsInstanceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EcsInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcsInstanceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcsInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EcsInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList">EcsInstanceV1DataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nics">nics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList">EcsInstanceV1NicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskId">systemDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference">EcsInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.volumesAttached">volumesAttached</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList">EcsInstanceV1VolumesAttachedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.autoRecoveryInput">autoRecoveryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dataDisksInput">dataDisksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.deleteDisksOnTerminationInput">deleteDisksOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.flavorInput">flavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nicsInput">nicsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskKmsIdInput">systemDiskKmsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskSizeInput">systemDiskSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskTypeInput">systemDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.autoRecovery">autoRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.deleteDisksOnTermination">deleteDisksOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.flavor">flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskKmsId">systemDiskKmsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskSize">systemDiskSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskType">systemDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataDisks`<sup>Required</sup> <a name="dataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dataDisks"></a>

```java
public EcsInstanceV1DataDisksList getDataDisks();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList">EcsInstanceV1DataDisksList</a>

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nics"></a>

```java
public EcsInstanceV1NicsList getNics();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList">EcsInstanceV1NicsList</a>

---

##### `systemDiskId`<sup>Required</sup> <a name="systemDiskId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskId"></a>

```java
public java.lang.String getSystemDiskId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.timeouts"></a>

```java
public EcsInstanceV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference">EcsInstanceV1TimeoutsOutputReference</a>

---

##### `volumesAttached`<sup>Required</sup> <a name="volumesAttached" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.volumesAttached"></a>

```java
public EcsInstanceV1VolumesAttachedList getVolumesAttached();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList">EcsInstanceV1VolumesAttachedList</a>

---

##### `autoRecoveryInput`<sup>Optional</sup> <a name="autoRecoveryInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.autoRecoveryInput"></a>

```java
public java.lang.Object getAutoRecoveryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `dataDisksInput`<sup>Optional</sup> <a name="dataDisksInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.dataDisksInput"></a>

```java
public java.lang.Object getDataDisksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>>

---

##### `deleteDisksOnTerminationInput`<sup>Optional</sup> <a name="deleteDisksOnTerminationInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.deleteDisksOnTerminationInput"></a>

```java
public java.lang.Object getDeleteDisksOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.flavorInput"></a>

```java
public java.lang.String getFlavorInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nicsInput`<sup>Optional</sup> <a name="nicsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.nicsInput"></a>

```java
public java.lang.Object getNicsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemDiskKmsIdInput`<sup>Optional</sup> <a name="systemDiskKmsIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskKmsIdInput"></a>

```java
public java.lang.String getSystemDiskKmsIdInput();
```

- *Type:* java.lang.String

---

##### `systemDiskSizeInput`<sup>Optional</sup> <a name="systemDiskSizeInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskSizeInput"></a>

```java
public java.lang.Number getSystemDiskSizeInput();
```

- *Type:* java.lang.Number

---

##### `systemDiskTypeInput`<sup>Optional</sup> <a name="systemDiskTypeInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskTypeInput"></a>

```java
public java.lang.String getSystemDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.autoRecovery"></a>

```java
public java.lang.Object getAutoRecovery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `deleteDisksOnTermination`<sup>Required</sup> <a name="deleteDisksOnTermination" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.deleteDisksOnTermination"></a>

```java
public java.lang.Object getDeleteDisksOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemDiskKmsId`<sup>Required</sup> <a name="systemDiskKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskKmsId"></a>

```java
public java.lang.String getSystemDiskKmsId();
```

- *Type:* java.lang.String

---

##### `systemDiskSize`<sup>Required</sup> <a name="systemDiskSize" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskSize"></a>

```java
public java.lang.Number getSystemDiskSize();
```

- *Type:* java.lang.Number

---

##### `systemDiskType`<sup>Required</sup> <a name="systemDiskType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.systemDiskType"></a>

```java
public java.lang.String getSystemDiskType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsInstanceV1Config <a name="EcsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1Config;

EcsInstanceV1Config.builder()
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
    .availabilityZone(java.lang.String)
    .flavor(java.lang.String)
    .imageId(java.lang.String)
    .name(java.lang.String)
    .nics(IResolvable)
    .nics(java.util.List<EcsInstanceV1Nics>)
    .vpcId(java.lang.String)
//  .autoRecovery(java.lang.Boolean)
//  .autoRecovery(IResolvable)
//  .dataDisks(IResolvable)
//  .dataDisks(java.util.List<EcsInstanceV1DataDisks>)
//  .deleteDisksOnTermination(java.lang.Boolean)
//  .deleteDisksOnTermination(IResolvable)
//  .id(java.lang.String)
//  .keyName(java.lang.String)
//  .password(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .systemDiskKmsId(java.lang.String)
//  .systemDiskSize(java.lang.Number)
//  .systemDiskType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EcsInstanceV1Timeouts)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#availability_zone EcsInstanceV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#flavor EcsInstanceV1#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#image_id EcsInstanceV1#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#name EcsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.nics">nics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>></code> | nics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#vpc_id EcsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.autoRecovery">autoRecovery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#auto_recovery EcsInstanceV1#auto_recovery}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.dataDisks">dataDisks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>></code> | data_disks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.deleteDisksOnTermination">deleteDisksOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#delete_disks_on_termination EcsInstanceV1#delete_disks_on_termination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#id EcsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#key_name EcsInstanceV1#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#password EcsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#security_groups EcsInstanceV1#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskKmsId">systemDiskKmsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_kms_id EcsInstanceV1#system_disk_kms_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskSize">systemDiskSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_size EcsInstanceV1#system_disk_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskType">systemDiskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_type EcsInstanceV1#system_disk_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#tags EcsInstanceV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#user_data EcsInstanceV1#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#availability_zone EcsInstanceV1#availability_zone}.

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#flavor EcsInstanceV1#flavor}.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#image_id EcsInstanceV1#image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#name EcsInstanceV1#name}.

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.nics"></a>

```java
public java.lang.Object getNics();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>>

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#nics EcsInstanceV1#nics}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#vpc_id EcsInstanceV1#vpc_id}.

---

##### `autoRecovery`<sup>Optional</sup> <a name="autoRecovery" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.autoRecovery"></a>

```java
public java.lang.Object getAutoRecovery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#auto_recovery EcsInstanceV1#auto_recovery}.

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.dataDisks"></a>

```java
public java.lang.Object getDataDisks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#data_disks EcsInstanceV1#data_disks}

---

##### `deleteDisksOnTermination`<sup>Optional</sup> <a name="deleteDisksOnTermination" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.deleteDisksOnTermination"></a>

```java
public java.lang.Object getDeleteDisksOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#delete_disks_on_termination EcsInstanceV1#delete_disks_on_termination}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#id EcsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#key_name EcsInstanceV1#key_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#password EcsInstanceV1#password}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#security_groups EcsInstanceV1#security_groups}.

---

##### `systemDiskKmsId`<sup>Optional</sup> <a name="systemDiskKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskKmsId"></a>

```java
public java.lang.String getSystemDiskKmsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_kms_id EcsInstanceV1#system_disk_kms_id}.

---

##### `systemDiskSize`<sup>Optional</sup> <a name="systemDiskSize" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskSize"></a>

```java
public java.lang.Number getSystemDiskSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_size EcsInstanceV1#system_disk_size}.

---

##### `systemDiskType`<sup>Optional</sup> <a name="systemDiskType" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.systemDiskType"></a>

```java
public java.lang.String getSystemDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#system_disk_type EcsInstanceV1#system_disk_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#tags EcsInstanceV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.timeouts"></a>

```java
public EcsInstanceV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#timeouts EcsInstanceV1#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Config.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#user_data EcsInstanceV1#user_data}.

---

### EcsInstanceV1DataDisks <a name="EcsInstanceV1DataDisks" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1DataDisks;

EcsInstanceV1DataDisks.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
//  .kmsId(java.lang.String)
//  .snapshotId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#size EcsInstanceV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#type EcsInstanceV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#kms_id EcsInstanceV1#kms_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#snapshot_id EcsInstanceV1#snapshot_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#size EcsInstanceV1#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#type EcsInstanceV1#type}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#kms_id EcsInstanceV1#kms_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#snapshot_id EcsInstanceV1#snapshot_id}.

---

### EcsInstanceV1Nics <a name="EcsInstanceV1Nics" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1Nics;

EcsInstanceV1Nics.builder()
    .networkId(java.lang.String)
//  .ipAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.property.networkId">networkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#network_id EcsInstanceV1#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#ip_address EcsInstanceV1#ip_address}. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#network_id EcsInstanceV1#network_id}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#ip_address EcsInstanceV1#ip_address}.

---

### EcsInstanceV1Timeouts <a name="EcsInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1Timeouts;

EcsInstanceV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#create EcsInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#delete EcsInstanceV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#update EcsInstanceV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#create EcsInstanceV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#delete EcsInstanceV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/ecs_instance_v1#update EcsInstanceV1#update}.

---

### EcsInstanceV1VolumesAttached <a name="EcsInstanceV1VolumesAttached" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttached"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttached.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1VolumesAttached;

EcsInstanceV1VolumesAttached.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### EcsInstanceV1DataDisksList <a name="EcsInstanceV1DataDisksList" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1DataDisksList;

new EcsInstanceV1DataDisksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.get"></a>

```java
public EcsInstanceV1DataDisksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>>

---


### EcsInstanceV1DataDisksOutputReference <a name="EcsInstanceV1DataDisksOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1DataDisksOutputReference;

new EcsInstanceV1DataDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resetKmsId"></a>

```java
public void resetKmsId()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.kmsIdInput"></a>

```java
public java.lang.String getKmsIdInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1DataDisks">EcsInstanceV1DataDisks</a>

---


### EcsInstanceV1NicsList <a name="EcsInstanceV1NicsList" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1NicsList;

new EcsInstanceV1NicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.get"></a>

```java
public EcsInstanceV1NicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>>

---


### EcsInstanceV1NicsOutputReference <a name="EcsInstanceV1NicsOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1NicsOutputReference;

new EcsInstanceV1NicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.portId">portId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.networkIdInput">networkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `portId`<sup>Required</sup> <a name="portId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.portId"></a>

```java
public java.lang.String getPortId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.networkIdInput"></a>

```java
public java.lang.String getNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1NicsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Nics">EcsInstanceV1Nics</a>

---


### EcsInstanceV1TimeoutsOutputReference <a name="EcsInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1TimeoutsOutputReference;

new EcsInstanceV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1Timeouts">EcsInstanceV1Timeouts</a>

---


### EcsInstanceV1VolumesAttachedList <a name="EcsInstanceV1VolumesAttachedList" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1VolumesAttachedList;

new EcsInstanceV1VolumesAttachedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.get"></a>

```java
public EcsInstanceV1VolumesAttachedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EcsInstanceV1VolumesAttachedOutputReference <a name="EcsInstanceV1VolumesAttachedOutputReference" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.ecs_instance_v1.EcsInstanceV1VolumesAttachedOutputReference;

new EcsInstanceV1VolumesAttachedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttached">EcsInstanceV1VolumesAttached</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttachedOutputReference.property.internalValue"></a>

```java
public EcsInstanceV1VolumesAttached getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ecsInstanceV1.EcsInstanceV1VolumesAttached">EcsInstanceV1VolumesAttached</a>

---



