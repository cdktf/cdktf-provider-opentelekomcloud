# `rdsInstanceV3` Submodule <a name="`rdsInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsInstanceV3 <a name="RdsInstanceV3" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3 opentelekomcloud_rds_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3;

RdsInstanceV3.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityZone(java.util.List<java.lang.String>)
    .db(RdsInstanceV3Db)
    .flavor(java.lang.String)
    .name(java.lang.String)
    .securityGroupId(java.lang.String)
    .subnetId(java.lang.String)
    .volume(RdsInstanceV3Volume)
    .vpcId(java.lang.String)
//  .backupStrategy(RdsInstanceV3BackupStrategy)
//  .haReplicationMode(java.lang.String)
//  .id(java.lang.String)
//  .lowerCaseTableNames(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .paramGroupId(java.lang.String)
//  .privateIp(java.lang.String)
//  .publicIps(java.util.List<java.lang.String>)
//  .restoreFromBackup(RdsInstanceV3RestoreFromBackup)
//  .restorePoint(RdsInstanceV3RestorePoint)
//  .sslEnable(java.lang.Boolean)
//  .sslEnable(IResolvable)
//  .tag(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RdsInstanceV3Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.db">db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#flavor RdsInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#name RdsInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.haReplicationMode">haReplicationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#id RdsInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#lower_case_table_names RdsInstanceV3#lower_case_table_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#parameters RdsInstanceV3#parameters}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.paramGroupId">paramGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#private_ip RdsInstanceV3#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.publicIps">publicIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#public_ips RdsInstanceV3#public_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.restoreFromBackup">restoreFromBackup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | restore_from_backup block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.restorePoint">restorePoint</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | restore_point block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.sslEnable">sslEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ssl_enable RdsInstanceV3#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.tag">tag</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tag RdsInstanceV3#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tags RdsInstanceV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.availabilityZone"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}.

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.db"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#db RdsInstanceV3#db}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.flavor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#flavor RdsInstanceV3#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#name RdsInstanceV3#name}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#volume RdsInstanceV3#volume}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}.

---

##### `backupStrategy`<sup>Optional</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.backupStrategy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_strategy RdsInstanceV3#backup_strategy}

---

##### `haReplicationMode`<sup>Optional</sup> <a name="haReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.haReplicationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#id RdsInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lowerCaseTableNames`<sup>Optional</sup> <a name="lowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.lowerCaseTableNames"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#lower_case_table_names RdsInstanceV3#lower_case_table_names}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#parameters RdsInstanceV3#parameters}.

---

##### `paramGroupId`<sup>Optional</sup> <a name="paramGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.paramGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.privateIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#private_ip RdsInstanceV3#private_ip}.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.publicIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#public_ips RdsInstanceV3#public_ips}.

---

##### `restoreFromBackup`<sup>Optional</sup> <a name="restoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.restoreFromBackup"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_from_backup RdsInstanceV3#restore_from_backup}

---

##### `restorePoint`<sup>Optional</sup> <a name="restorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.restorePoint"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

restore_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_point RdsInstanceV3#restore_point}

---

##### `sslEnable`<sup>Optional</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.sslEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ssl_enable RdsInstanceV3#ssl_enable}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.tag"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tag RdsInstanceV3#tag}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tags RdsInstanceV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#timeouts RdsInstanceV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy">putBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb">putDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup">putRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint">putRestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetBackupStrategy">resetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetHaReplicationMode">resetHaReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetLowerCaseTableNames">resetLowerCaseTableNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParamGroupId">resetParamGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPublicIps">resetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestoreFromBackup">resetRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestorePoint">resetRestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetSslEnable">resetSslEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupStrategy` <a name="putBackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy"></a>

```java
public void putBackupStrategy(RdsInstanceV3BackupStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---

##### `putDb` <a name="putDb" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb"></a>

```java
public void putDb(RdsInstanceV3Db value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---

##### `putRestoreFromBackup` <a name="putRestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup"></a>

```java
public void putRestoreFromBackup(RdsInstanceV3RestoreFromBackup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestoreFromBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---

##### `putRestorePoint` <a name="putRestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint"></a>

```java
public void putRestorePoint(RdsInstanceV3RestorePoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putRestorePoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts"></a>

```java
public void putTimeouts(RdsInstanceV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume"></a>

```java
public void putVolume(RdsInstanceV3Volume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---

##### `resetBackupStrategy` <a name="resetBackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetBackupStrategy"></a>

```java
public void resetBackupStrategy()
```

##### `resetHaReplicationMode` <a name="resetHaReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetHaReplicationMode"></a>

```java
public void resetHaReplicationMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetId"></a>

```java
public void resetId()
```

##### `resetLowerCaseTableNames` <a name="resetLowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetLowerCaseTableNames"></a>

```java
public void resetLowerCaseTableNames()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetParamGroupId` <a name="resetParamGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetParamGroupId"></a>

```java
public void resetParamGroupId()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetPublicIps` <a name="resetPublicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetPublicIps"></a>

```java
public void resetPublicIps()
```

##### `resetRestoreFromBackup` <a name="resetRestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestoreFromBackup"></a>

```java
public void resetRestoreFromBackup()
```

##### `resetRestorePoint` <a name="resetRestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetRestorePoint"></a>

```java
public void resetRestorePoint()
```

##### `resetSslEnable` <a name="resetSslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetSslEnable"></a>

```java
public void resetSslEnable()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTag"></a>

```java
public void resetTag()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RdsInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3;

RdsInstanceV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3;

RdsInstanceV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3;

RdsInstanceV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3;

RdsInstanceV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsInstanceV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RdsInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsInstanceV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RdsInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.autoscalingEnabled">autoscalingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference">RdsInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.db">db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference">RdsInstanceV3DbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList">RdsInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIps">privateIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoredBackupId">restoredBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackup">restoreFromBackup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference">RdsInstanceV3RestoreFromBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePoint">restorePoint</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference">RdsInstanceV3RestorePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference">RdsInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference">RdsInstanceV3VolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategyInput">backupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dbInput">dbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavorInput">flavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationModeInput">haReplicationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNamesInput">lowerCaseTableNamesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupIdInput">paramGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIpsInput">publicIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackupInput">restoreFromBackupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePointInput">restorePointInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnableInput">sslEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagInput">tagInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZone">availabilityZone</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavor">flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationMode">haReplicationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupId">paramGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIps">publicIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnable">sslEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tag">tag</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingEnabled`<sup>Required</sup> <a name="autoscalingEnabled" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.autoscalingEnabled"></a>

```java
public IResolvable getAutoscalingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupStrategy`<sup>Required</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategy"></a>

```java
public RdsInstanceV3BackupStrategyOutputReference getBackupStrategy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference">RdsInstanceV3BackupStrategyOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.db"></a>

```java
public RdsInstanceV3DbOutputReference getDb();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference">RdsInstanceV3DbOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nodes"></a>

```java
public RdsInstanceV3NodesList getNodes();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList">RdsInstanceV3NodesList</a>

---

##### `privateIps`<sup>Required</sup> <a name="privateIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIps"></a>

```java
public java.util.List<java.lang.String> getPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restoredBackupId`<sup>Required</sup> <a name="restoredBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoredBackupId"></a>

```java
public java.lang.String getRestoredBackupId();
```

- *Type:* java.lang.String

---

##### `restoreFromBackup`<sup>Required</sup> <a name="restoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackup"></a>

```java
public RdsInstanceV3RestoreFromBackupOutputReference getRestoreFromBackup();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference">RdsInstanceV3RestoreFromBackupOutputReference</a>

---

##### `restorePoint`<sup>Required</sup> <a name="restorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePoint"></a>

```java
public RdsInstanceV3RestorePointOutputReference getRestorePoint();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference">RdsInstanceV3RestorePointOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeouts"></a>

```java
public RdsInstanceV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference">RdsInstanceV3TimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volume"></a>

```java
public RdsInstanceV3VolumeOutputReference getVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference">RdsInstanceV3VolumeOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZoneInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZoneInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupStrategyInput`<sup>Optional</sup> <a name="backupStrategyInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.backupStrategyInput"></a>

```java
public RdsInstanceV3BackupStrategy getBackupStrategyInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---

##### `dbInput`<sup>Optional</sup> <a name="dbInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.dbInput"></a>

```java
public RdsInstanceV3Db getDbInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavorInput"></a>

```java
public java.lang.String getFlavorInput();
```

- *Type:* java.lang.String

---

##### `haReplicationModeInput`<sup>Optional</sup> <a name="haReplicationModeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationModeInput"></a>

```java
public java.lang.String getHaReplicationModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lowerCaseTableNamesInput`<sup>Optional</sup> <a name="lowerCaseTableNamesInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNamesInput"></a>

```java
public java.lang.String getLowerCaseTableNamesInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `paramGroupIdInput`<sup>Optional</sup> <a name="paramGroupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupIdInput"></a>

```java
public java.lang.String getParamGroupIdInput();
```

- *Type:* java.lang.String

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `publicIpsInput`<sup>Optional</sup> <a name="publicIpsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIpsInput"></a>

```java
public java.util.List<java.lang.String> getPublicIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restoreFromBackupInput`<sup>Optional</sup> <a name="restoreFromBackupInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restoreFromBackupInput"></a>

```java
public RdsInstanceV3RestoreFromBackup getRestoreFromBackupInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---

##### `restorePointInput`<sup>Optional</sup> <a name="restorePointInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.restorePointInput"></a>

```java
public RdsInstanceV3RestorePoint getRestorePointInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `sslEnableInput`<sup>Optional</sup> <a name="sslEnableInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnableInput"></a>

```java
public java.lang.Object getSslEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.volumeInput"></a>

```java
public RdsInstanceV3Volume getVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.availabilityZone"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZone();
```

- *Type:* java.util.List<java.lang.String>

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

---

##### `haReplicationMode`<sup>Required</sup> <a name="haReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.haReplicationMode"></a>

```java
public java.lang.String getHaReplicationMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lowerCaseTableNames`<sup>Required</sup> <a name="lowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.lowerCaseTableNames"></a>

```java
public java.lang.String getLowerCaseTableNames();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `paramGroupId`<sup>Required</sup> <a name="paramGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.paramGroupId"></a>

```java
public java.lang.String getParamGroupId();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.publicIps"></a>

```java
public java.util.List<java.lang.String> getPublicIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `sslEnable`<sup>Required</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.sslEnable"></a>

```java
public java.lang.Object getSslEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tag"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTag();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsInstanceV3BackupStrategy <a name="RdsInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3BackupStrategy;

RdsInstanceV3BackupStrategy.builder()
    .startTime(java.lang.String)
//  .keepDays(java.lang.Number)
//  .period(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#start_time RdsInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.keepDays">keepDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#keep_days RdsInstanceV3#keep_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#period RdsInstanceV3#period}. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#start_time RdsInstanceV3#start_time}.

---

##### `keepDays`<sup>Optional</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.keepDays"></a>

```java
public java.lang.Number getKeepDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#keep_days RdsInstanceV3#keep_days}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#period RdsInstanceV3#period}.

---

### RdsInstanceV3Config <a name="RdsInstanceV3Config" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3Config;

RdsInstanceV3Config.builder()
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
    .availabilityZone(java.util.List<java.lang.String>)
    .db(RdsInstanceV3Db)
    .flavor(java.lang.String)
    .name(java.lang.String)
    .securityGroupId(java.lang.String)
    .subnetId(java.lang.String)
    .volume(RdsInstanceV3Volume)
    .vpcId(java.lang.String)
//  .backupStrategy(RdsInstanceV3BackupStrategy)
//  .haReplicationMode(java.lang.String)
//  .id(java.lang.String)
//  .lowerCaseTableNames(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .paramGroupId(java.lang.String)
//  .privateIp(java.lang.String)
//  .publicIps(java.util.List<java.lang.String>)
//  .restoreFromBackup(RdsInstanceV3RestoreFromBackup)
//  .restorePoint(RdsInstanceV3RestorePoint)
//  .sslEnable(java.lang.Boolean)
//  .sslEnable(IResolvable)
//  .tag(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RdsInstanceV3Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.availabilityZone">availabilityZone</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.db">db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#flavor RdsInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#name RdsInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.haReplicationMode">haReplicationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#id RdsInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#lower_case_table_names RdsInstanceV3#lower_case_table_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#parameters RdsInstanceV3#parameters}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.paramGroupId">paramGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#private_ip RdsInstanceV3#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.publicIps">publicIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#public_ips RdsInstanceV3#public_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restoreFromBackup">restoreFromBackup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | restore_from_backup block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restorePoint">restorePoint</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | restore_point block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.sslEnable">sslEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ssl_enable RdsInstanceV3#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tag">tag</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tag RdsInstanceV3#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tags RdsInstanceV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.availabilityZone"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZone();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#availability_zone RdsInstanceV3#availability_zone}.

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.db"></a>

```java
public RdsInstanceV3Db getDb();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#db RdsInstanceV3#db}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#flavor RdsInstanceV3#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#name RdsInstanceV3#name}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#security_group_id RdsInstanceV3#security_group_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#subnet_id RdsInstanceV3#subnet_id}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.volume"></a>

```java
public RdsInstanceV3Volume getVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#volume RdsInstanceV3#volume}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#vpc_id RdsInstanceV3#vpc_id}.

---

##### `backupStrategy`<sup>Optional</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.backupStrategy"></a>

```java
public RdsInstanceV3BackupStrategy getBackupStrategy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_strategy RdsInstanceV3#backup_strategy}

---

##### `haReplicationMode`<sup>Optional</sup> <a name="haReplicationMode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.haReplicationMode"></a>

```java
public java.lang.String getHaReplicationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ha_replication_mode RdsInstanceV3#ha_replication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#id RdsInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lowerCaseTableNames`<sup>Optional</sup> <a name="lowerCaseTableNames" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.lowerCaseTableNames"></a>

```java
public java.lang.String getLowerCaseTableNames();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#lower_case_table_names RdsInstanceV3#lower_case_table_names}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#parameters RdsInstanceV3#parameters}.

---

##### `paramGroupId`<sup>Optional</sup> <a name="paramGroupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.paramGroupId"></a>

```java
public java.lang.String getParamGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#param_group_id RdsInstanceV3#param_group_id}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#private_ip RdsInstanceV3#private_ip}.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.publicIps"></a>

```java
public java.util.List<java.lang.String> getPublicIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#public_ips RdsInstanceV3#public_ips}.

---

##### `restoreFromBackup`<sup>Optional</sup> <a name="restoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restoreFromBackup"></a>

```java
public RdsInstanceV3RestoreFromBackup getRestoreFromBackup();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_from_backup RdsInstanceV3#restore_from_backup}

---

##### `restorePoint`<sup>Optional</sup> <a name="restorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.restorePoint"></a>

```java
public RdsInstanceV3RestorePoint getRestorePoint();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

restore_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_point RdsInstanceV3#restore_point}

---

##### `sslEnable`<sup>Optional</sup> <a name="sslEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.sslEnable"></a>

```java
public java.lang.Object getSslEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#ssl_enable RdsInstanceV3#ssl_enable}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tag"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTag();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tag RdsInstanceV3#tag}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#tags RdsInstanceV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Config.property.timeouts"></a>

```java
public RdsInstanceV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#timeouts RdsInstanceV3#timeouts}

---

### RdsInstanceV3Db <a name="RdsInstanceV3Db" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3Db;

RdsInstanceV3Db.builder()
    .password(java.lang.String)
//  .port(java.lang.Number)
//  .type(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#password RdsInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#port RdsInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#version RdsInstanceV3#version}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#password RdsInstanceV3#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#port RdsInstanceV3#port}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#version RdsInstanceV3#version}.

---

### RdsInstanceV3Nodes <a name="RdsInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3Nodes;

RdsInstanceV3Nodes.builder()
    .build();
```


### RdsInstanceV3RestoreFromBackup <a name="RdsInstanceV3RestoreFromBackup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3RestoreFromBackup;

RdsInstanceV3RestoreFromBackup.builder()
    .sourceInstanceId(java.lang.String)
    .type(java.lang.String)
//  .backupId(java.lang.String)
//  .restoreTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.sourceInstanceId">sourceInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#source_instance_id RdsInstanceV3#source_instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.restoreTime">restoreTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}. |

---

##### `sourceInstanceId`<sup>Required</sup> <a name="sourceInstanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.sourceInstanceId"></a>

```java
public java.lang.String getSourceInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#source_instance_id RdsInstanceV3#source_instance_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}.

---

##### `restoreTime`<sup>Optional</sup> <a name="restoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup.property.restoreTime"></a>

```java
public java.lang.Number getRestoreTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}.

---

### RdsInstanceV3RestorePoint <a name="RdsInstanceV3RestorePoint" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3RestorePoint;

RdsInstanceV3RestorePoint.builder()
    .instanceId(java.lang.String)
//  .backupId(java.lang.String)
//  .restoreTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#instance_id RdsInstanceV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.restoreTime">restoreTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#instance_id RdsInstanceV3#instance_id}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#backup_id RdsInstanceV3#backup_id}.

---

##### `restoreTime`<sup>Optional</sup> <a name="restoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint.property.restoreTime"></a>

```java
public java.lang.Number getRestoreTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#restore_time RdsInstanceV3#restore_time}.

---

### RdsInstanceV3Timeouts <a name="RdsInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3Timeouts;

RdsInstanceV3Timeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#create RdsInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#update RdsInstanceV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#create RdsInstanceV3#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#update RdsInstanceV3#update}.

---

### RdsInstanceV3Volume <a name="RdsInstanceV3Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3Volume;

RdsInstanceV3Volume.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
//  .diskEncryptionId(java.lang.String)
//  .limitSize(java.lang.Number)
//  .triggerThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#size RdsInstanceV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.diskEncryptionId">diskEncryptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#disk_encryption_id RdsInstanceV3#disk_encryption_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.limitSize">limitSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#limit_size RdsInstanceV3#limit_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.triggerThreshold">triggerThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#trigger_threshold RdsInstanceV3#trigger_threshold}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#size RdsInstanceV3#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#type RdsInstanceV3#type}.

---

##### `diskEncryptionId`<sup>Optional</sup> <a name="diskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.diskEncryptionId"></a>

```java
public java.lang.String getDiskEncryptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#disk_encryption_id RdsInstanceV3#disk_encryption_id}.

---

##### `limitSize`<sup>Optional</sup> <a name="limitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.limitSize"></a>

```java
public java.lang.Number getLimitSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#limit_size RdsInstanceV3#limit_size}.

---

##### `triggerThreshold`<sup>Optional</sup> <a name="triggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume.property.triggerThreshold"></a>

```java
public java.lang.Number getTriggerThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rds_instance_v3#trigger_threshold RdsInstanceV3#trigger_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsInstanceV3BackupStrategyOutputReference <a name="RdsInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3BackupStrategyOutputReference;

new RdsInstanceV3BackupStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetKeepDays">resetKeepDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepDays` <a name="resetKeepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```java
public void resetKeepDays()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDaysInput">keepDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDays">keepDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keepDaysInput`<sup>Optional</sup> <a name="keepDaysInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```java
public java.lang.Number getKeepDaysInput();
```

- *Type:* java.lang.Number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `keepDays`<sup>Required</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```java
public java.lang.Number getKeepDays();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```java
public RdsInstanceV3BackupStrategy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3BackupStrategy">RdsInstanceV3BackupStrategy</a>

---


### RdsInstanceV3DbOutputReference <a name="RdsInstanceV3DbOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3DbOutputReference;

new RdsInstanceV3DbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3DbOutputReference.property.internalValue"></a>

```java
public RdsInstanceV3Db getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Db">RdsInstanceV3Db</a>

---


### RdsInstanceV3NodesList <a name="RdsInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3NodesList;

new RdsInstanceV3NodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get"></a>

```java
public RdsInstanceV3NodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RdsInstanceV3NodesOutputReference <a name="RdsInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3NodesOutputReference;

new RdsInstanceV3NodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes">RdsInstanceV3Nodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3NodesOutputReference.property.internalValue"></a>

```java
public RdsInstanceV3Nodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Nodes">RdsInstanceV3Nodes</a>

---


### RdsInstanceV3RestoreFromBackupOutputReference <a name="RdsInstanceV3RestoreFromBackupOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3RestoreFromBackupOutputReference;

new RdsInstanceV3RestoreFromBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetRestoreTime">resetRestoreTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetRestoreTime` <a name="resetRestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.resetRestoreTime"></a>

```java
public void resetRestoreTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTimeInput">restoreTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceIdInput">sourceInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTime">restoreTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceId">sourceInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `restoreTimeInput`<sup>Optional</sup> <a name="restoreTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTimeInput"></a>

```java
public java.lang.Number getRestoreTimeInput();
```

- *Type:* java.lang.Number

---

##### `sourceInstanceIdInput`<sup>Optional</sup> <a name="sourceInstanceIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceIdInput"></a>

```java
public java.lang.String getSourceInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `restoreTime`<sup>Required</sup> <a name="restoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.restoreTime"></a>

```java
public java.lang.Number getRestoreTime();
```

- *Type:* java.lang.Number

---

##### `sourceInstanceId`<sup>Required</sup> <a name="sourceInstanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.sourceInstanceId"></a>

```java
public java.lang.String getSourceInstanceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackupOutputReference.property.internalValue"></a>

```java
public RdsInstanceV3RestoreFromBackup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestoreFromBackup">RdsInstanceV3RestoreFromBackup</a>

---


### RdsInstanceV3RestorePointOutputReference <a name="RdsInstanceV3RestorePointOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3RestorePointOutputReference;

new RdsInstanceV3RestorePointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetRestoreTime">resetRestoreTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetRestoreTime` <a name="resetRestoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.resetRestoreTime"></a>

```java
public void resetRestoreTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTimeInput">restoreTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTime">restoreTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `restoreTimeInput`<sup>Optional</sup> <a name="restoreTimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTimeInput"></a>

```java
public java.lang.Number getRestoreTimeInput();
```

- *Type:* java.lang.Number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `restoreTime`<sup>Required</sup> <a name="restoreTime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.restoreTime"></a>

```java
public java.lang.Number getRestoreTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePointOutputReference.property.internalValue"></a>

```java
public RdsInstanceV3RestorePoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3RestorePoint">RdsInstanceV3RestorePoint</a>

---


### RdsInstanceV3TimeoutsOutputReference <a name="RdsInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3TimeoutsOutputReference;

new RdsInstanceV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Timeouts">RdsInstanceV3Timeouts</a>

---


### RdsInstanceV3VolumeOutputReference <a name="RdsInstanceV3VolumeOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v3.RdsInstanceV3VolumeOutputReference;

new RdsInstanceV3VolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetDiskEncryptionId">resetDiskEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetLimitSize">resetLimitSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetTriggerThreshold">resetTriggerThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryptionId` <a name="resetDiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetDiskEncryptionId"></a>

```java
public void resetDiskEncryptionId()
```

##### `resetLimitSize` <a name="resetLimitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetLimitSize"></a>

```java
public void resetLimitSize()
```

##### `resetTriggerThreshold` <a name="resetTriggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.resetTriggerThreshold"></a>

```java
public void resetTriggerThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionIdInput">diskEncryptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSizeInput">limitSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThresholdInput">triggerThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionId">diskEncryptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSize">limitSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThreshold">triggerThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionIdInput`<sup>Optional</sup> <a name="diskEncryptionIdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionIdInput"></a>

```java
public java.lang.String getDiskEncryptionIdInput();
```

- *Type:* java.lang.String

---

##### `limitSizeInput`<sup>Optional</sup> <a name="limitSizeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSizeInput"></a>

```java
public java.lang.Number getLimitSizeInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `triggerThresholdInput`<sup>Optional</sup> <a name="triggerThresholdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThresholdInput"></a>

```java
public java.lang.Number getTriggerThresholdInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionId`<sup>Required</sup> <a name="diskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.diskEncryptionId"></a>

```java
public java.lang.String getDiskEncryptionId();
```

- *Type:* java.lang.String

---

##### `limitSize`<sup>Required</sup> <a name="limitSize" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.limitSize"></a>

```java
public java.lang.Number getLimitSize();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `triggerThreshold`<sup>Required</sup> <a name="triggerThreshold" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.triggerThreshold"></a>

```java
public java.lang.Number getTriggerThreshold();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3VolumeOutputReference.property.internalValue"></a>

```java
public RdsInstanceV3Volume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV3.RdsInstanceV3Volume">RdsInstanceV3Volume</a>

---



