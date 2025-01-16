# `dataOpentelekomcloudCbrBackupV3` Submodule <a name="`dataOpentelekomcloudCbrBackupV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCbrBackupV3 <a name="DataOpentelekomcloudCbrBackupV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3 opentelekomcloud_cbr_backup_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cbr_backup_v3.DataOpentelekomcloudCbrBackupV3;

DataOpentelekomcloudCbrBackupV3.Builder.create(Construct scope, java.lang.String id)
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
//  .autoTrigger(java.lang.Boolean)
//  .autoTrigger(IResolvable)
//  .bootable(java.lang.Boolean)
//  .bootable(IResolvable)
//  .checkpointId(java.lang.String)
//  .containSystemDisk(java.lang.Boolean)
//  .containSystemDisk(IResolvable)
//  .createdAt(java.lang.String)
//  .description(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .expiredAt(java.lang.String)
//  .id(java.lang.String)
//  .imageType(java.lang.String)
//  .incremental(java.lang.Boolean)
//  .incremental(IResolvable)
//  .name(java.lang.String)
//  .parentId(java.lang.String)
//  .projectId(java.lang.String)
//  .providerId(java.lang.String)
//  .resourceAz(java.lang.String)
//  .resourceId(java.lang.String)
//  .resourceName(java.lang.String)
//  .resourceSize(java.lang.Number)
//  .resourceType(java.lang.String)
//  .snapshotId(java.lang.String)
//  .status(java.lang.String)
//  .supportedRestoreMode(java.lang.String)
//  .supportLld(java.lang.Boolean)
//  .supportLld(IResolvable)
//  .systemDisk(java.lang.Boolean)
//  .systemDisk(IResolvable)
//  .updatedAt(java.lang.String)
//  .vaultId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.autoTrigger">autoTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.bootable">bootable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.checkpointId">checkpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.containSystemDisk">containSystemDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.createdAt">createdAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.expiredAt">expiredAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.imageType">imageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.incremental">incremental</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.parentId">parentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.providerId">providerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceAz">resourceAz</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceName">resourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceSize">resourceSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.supportedRestoreMode">supportedRestoreMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.supportLld">supportLld</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.systemDisk">systemDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoTrigger`<sup>Optional</sup> <a name="autoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.autoTrigger"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.bootable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}.

---

##### `checkpointId`<sup>Optional</sup> <a name="checkpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.checkpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}.

---

##### `containSystemDisk`<sup>Optional</sup> <a name="containSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.containSystemDisk"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.createdAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.encrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}.

---

##### `expiredAt`<sup>Optional</sup> <a name="expiredAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.expiredAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.imageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}.

---

##### `incremental`<sup>Optional</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.incremental"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}.

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.parentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}.

---

##### `providerId`<sup>Optional</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.providerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}.

---

##### `resourceAz`<sup>Optional</sup> <a name="resourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceAz"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}.

---

##### `resourceSize`<sup>Optional</sup> <a name="resourceSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}.

---

##### `supportedRestoreMode`<sup>Optional</sup> <a name="supportedRestoreMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.supportedRestoreMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}.

---

##### `supportLld`<sup>Optional</sup> <a name="supportLld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.supportLld"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}.

---

##### `systemDisk`<sup>Optional</sup> <a name="systemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.systemDisk"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.updatedAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetAutoTrigger">resetAutoTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetBootable">resetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCheckpointId">resetCheckpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetContainSystemDisk">resetContainSystemDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetExpiredAt">resetExpiredAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetIncremental">resetIncremental</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProviderId">resetProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceAz">resetResourceAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceSize">resetResourceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportedRestoreMode">resetSupportedRestoreMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportLld">resetSupportLld</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSystemDisk">resetSystemDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetVaultId">resetVaultId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAutoTrigger` <a name="resetAutoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetAutoTrigger"></a>

```java
public void resetAutoTrigger()
```

##### `resetBootable` <a name="resetBootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetBootable"></a>

```java
public void resetBootable()
```

##### `resetCheckpointId` <a name="resetCheckpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCheckpointId"></a>

```java
public void resetCheckpointId()
```

##### `resetContainSystemDisk` <a name="resetContainSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetContainSystemDisk"></a>

```java
public void resetContainSystemDisk()
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetExpiredAt` <a name="resetExpiredAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetExpiredAt"></a>

```java
public void resetExpiredAt()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetId"></a>

```java
public void resetId()
```

##### `resetImageType` <a name="resetImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetImageType"></a>

```java
public void resetImageType()
```

##### `resetIncremental` <a name="resetIncremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetIncremental"></a>

```java
public void resetIncremental()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetName"></a>

```java
public void resetName()
```

##### `resetParentId` <a name="resetParentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetParentId"></a>

```java
public void resetParentId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetProviderId` <a name="resetProviderId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProviderId"></a>

```java
public void resetProviderId()
```

##### `resetResourceAz` <a name="resetResourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceAz"></a>

```java
public void resetResourceAz()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceName"></a>

```java
public void resetResourceName()
```

##### `resetResourceSize` <a name="resetResourceSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceSize"></a>

```java
public void resetResourceSize()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetSupportedRestoreMode` <a name="resetSupportedRestoreMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportedRestoreMode"></a>

```java
public void resetSupportedRestoreMode()
```

##### `resetSupportLld` <a name="resetSupportLld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportLld"></a>

```java
public void resetSupportLld()
```

##### `resetSystemDisk` <a name="resetSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSystemDisk"></a>

```java
public void resetSystemDisk()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

##### `resetVaultId` <a name="resetVaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetVaultId"></a>

```java
public void resetVaultId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCbrBackupV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cbr_backup_v3.DataOpentelekomcloudCbrBackupV3;

DataOpentelekomcloudCbrBackupV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cbr_backup_v3.DataOpentelekomcloudCbrBackupV3;

DataOpentelekomcloudCbrBackupV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cbr_backup_v3.DataOpentelekomcloudCbrBackupV3;

DataOpentelekomcloudCbrBackupV3.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cbr_backup_v3.DataOpentelekomcloudCbrBackupV3;

DataOpentelekomcloudCbrBackupV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOpentelekomcloudCbrBackupV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOpentelekomcloudCbrBackupV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOpentelekomcloudCbrBackupV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOpentelekomcloudCbrBackupV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCbrBackupV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTriggerInput">autoTriggerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootableInput">bootableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointIdInput">checkpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDiskInput">containSystemDiskInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAtInput">expiredAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageTypeInput">imageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incrementalInput">incrementalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentIdInput">parentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerIdInput">providerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAzInput">resourceAzInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSizeInput">resourceSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreModeInput">supportedRestoreModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLldInput">supportLldInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDiskInput">systemDiskInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTrigger">autoTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootable">bootable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointId">checkpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDisk">containSystemDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAt">expiredAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incremental">incremental</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentId">parentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAz">resourceAz</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSize">resourceSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreMode">supportedRestoreMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLld">supportLld</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDisk">systemDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autoTriggerInput`<sup>Optional</sup> <a name="autoTriggerInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTriggerInput"></a>

```java
public java.lang.Object getAutoTriggerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bootableInput`<sup>Optional</sup> <a name="bootableInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootableInput"></a>

```java
public java.lang.Object getBootableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkpointIdInput`<sup>Optional</sup> <a name="checkpointIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointIdInput"></a>

```java
public java.lang.String getCheckpointIdInput();
```

- *Type:* java.lang.String

---

##### `containSystemDiskInput`<sup>Optional</sup> <a name="containSystemDiskInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDiskInput"></a>

```java
public java.lang.Object getContainSystemDiskInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAtInput"></a>

```java
public java.lang.String getCreatedAtInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expiredAtInput`<sup>Optional</sup> <a name="expiredAtInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAtInput"></a>

```java
public java.lang.String getExpiredAtInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageTypeInput"></a>

```java
public java.lang.String getImageTypeInput();
```

- *Type:* java.lang.String

---

##### `incrementalInput`<sup>Optional</sup> <a name="incrementalInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incrementalInput"></a>

```java
public java.lang.Object getIncrementalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentIdInput"></a>

```java
public java.lang.String getParentIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerIdInput"></a>

```java
public java.lang.String getProviderIdInput();
```

- *Type:* java.lang.String

---

##### `resourceAzInput`<sup>Optional</sup> <a name="resourceAzInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAzInput"></a>

```java
public java.lang.String getResourceAzInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `resourceSizeInput`<sup>Optional</sup> <a name="resourceSizeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSizeInput"></a>

```java
public java.lang.Number getResourceSizeInput();
```

- *Type:* java.lang.Number

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `supportedRestoreModeInput`<sup>Optional</sup> <a name="supportedRestoreModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreModeInput"></a>

```java
public java.lang.String getSupportedRestoreModeInput();
```

- *Type:* java.lang.String

---

##### `supportLldInput`<sup>Optional</sup> <a name="supportLldInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLldInput"></a>

```java
public java.lang.Object getSupportLldInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `systemDiskInput`<sup>Optional</sup> <a name="systemDiskInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDiskInput"></a>

```java
public java.lang.Object getSystemDiskInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAtInput"></a>

```java
public java.lang.String getUpdatedAtInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `autoTrigger`<sup>Required</sup> <a name="autoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTrigger"></a>

```java
public java.lang.Object getAutoTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootable"></a>

```java
public java.lang.Object getBootable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkpointId`<sup>Required</sup> <a name="checkpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointId"></a>

```java
public java.lang.String getCheckpointId();
```

- *Type:* java.lang.String

---

##### `containSystemDisk`<sup>Required</sup> <a name="containSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDisk"></a>

```java
public java.lang.Object getContainSystemDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expiredAt`<sup>Required</sup> <a name="expiredAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAt"></a>

```java
public java.lang.String getExpiredAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `incremental`<sup>Required</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incremental"></a>

```java
public java.lang.Object getIncremental();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `resourceAz`<sup>Required</sup> <a name="resourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAz"></a>

```java
public java.lang.String getResourceAz();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `resourceSize`<sup>Required</sup> <a name="resourceSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSize"></a>

```java
public java.lang.Number getResourceSize();
```

- *Type:* java.lang.Number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `supportedRestoreMode`<sup>Required</sup> <a name="supportedRestoreMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreMode"></a>

```java
public java.lang.String getSupportedRestoreMode();
```

- *Type:* java.lang.String

---

##### `supportLld`<sup>Required</sup> <a name="supportLld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLld"></a>

```java
public java.lang.Object getSupportLld();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `systemDisk`<sup>Required</sup> <a name="systemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDisk"></a>

```java
public java.lang.Object getSystemDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCbrBackupV3Config <a name="DataOpentelekomcloudCbrBackupV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_cbr_backup_v3.DataOpentelekomcloudCbrBackupV3Config;

DataOpentelekomcloudCbrBackupV3Config.builder()
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
//  .autoTrigger(java.lang.Boolean)
//  .autoTrigger(IResolvable)
//  .bootable(java.lang.Boolean)
//  .bootable(IResolvable)
//  .checkpointId(java.lang.String)
//  .containSystemDisk(java.lang.Boolean)
//  .containSystemDisk(IResolvable)
//  .createdAt(java.lang.String)
//  .description(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .expiredAt(java.lang.String)
//  .id(java.lang.String)
//  .imageType(java.lang.String)
//  .incremental(java.lang.Boolean)
//  .incremental(IResolvable)
//  .name(java.lang.String)
//  .parentId(java.lang.String)
//  .projectId(java.lang.String)
//  .providerId(java.lang.String)
//  .resourceAz(java.lang.String)
//  .resourceId(java.lang.String)
//  .resourceName(java.lang.String)
//  .resourceSize(java.lang.Number)
//  .resourceType(java.lang.String)
//  .snapshotId(java.lang.String)
//  .status(java.lang.String)
//  .supportedRestoreMode(java.lang.String)
//  .supportLld(java.lang.Boolean)
//  .supportLld(IResolvable)
//  .systemDisk(java.lang.Boolean)
//  .systemDisk(IResolvable)
//  .updatedAt(java.lang.String)
//  .vaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.autoTrigger">autoTrigger</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.bootable">bootable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.checkpointId">checkpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.containSystemDisk">containSystemDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.expiredAt">expiredAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.imageType">imageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.incremental">incremental</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.parentId">parentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.providerId">providerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceAz">resourceAz</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceSize">resourceSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportedRestoreMode">supportedRestoreMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportLld">supportLld</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.systemDisk">systemDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoTrigger`<sup>Optional</sup> <a name="autoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.autoTrigger"></a>

```java
public java.lang.Object getAutoTrigger();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.bootable"></a>

```java
public java.lang.Object getBootable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}.

---

##### `checkpointId`<sup>Optional</sup> <a name="checkpointId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.checkpointId"></a>

```java
public java.lang.String getCheckpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}.

---

##### `containSystemDisk`<sup>Optional</sup> <a name="containSystemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.containSystemDisk"></a>

```java
public java.lang.Object getContainSystemDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}.

---

##### `expiredAt`<sup>Optional</sup> <a name="expiredAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.expiredAt"></a>

```java
public java.lang.String getExpiredAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}.

---

##### `incremental`<sup>Optional</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.incremental"></a>

```java
public java.lang.Object getIncremental();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}.

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}.

---

##### `providerId`<sup>Optional</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}.

---

##### `resourceAz`<sup>Optional</sup> <a name="resourceAz" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceAz"></a>

```java
public java.lang.String getResourceAz();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}.

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}.

---

##### `resourceSize`<sup>Optional</sup> <a name="resourceSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceSize"></a>

```java
public java.lang.Number getResourceSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}.

---

##### `supportedRestoreMode`<sup>Optional</sup> <a name="supportedRestoreMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportedRestoreMode"></a>

```java
public java.lang.String getSupportedRestoreMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}.

---

##### `supportLld`<sup>Optional</sup> <a name="supportLld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportLld"></a>

```java
public java.lang.Object getSupportLld();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}.

---

##### `systemDisk`<sup>Optional</sup> <a name="systemDisk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.systemDisk"></a>

```java
public java.lang.Object getSystemDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}.

---



