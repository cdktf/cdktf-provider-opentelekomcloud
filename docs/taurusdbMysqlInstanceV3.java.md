# `taurusdbMysqlInstanceV3` Submodule <a name="`taurusdbMysqlInstanceV3` Submodule" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TaurusdbMysqlInstanceV3 <a name="TaurusdbMysqlInstanceV3" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3 opentelekomcloud_taurusdb_mysql_instance_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3;

TaurusdbMysqlInstanceV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flavor(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .availabilityZoneMode(java.lang.String)
//  .backupStrategy(TaurusdbMysqlInstanceV3BackupStrategy)
//  .configurationId(java.lang.String)
//  .datastore(TaurusdbMysqlInstanceV3Datastore)
//  .dedicatedResourceId(java.lang.String)
//  .enterpriseProjectId(java.lang.String)
//  .id(java.lang.String)
//  .masterAvailabilityZone(java.lang.String)
//  .port(java.lang.Number)
//  .readReplicas(java.lang.Number)
//  .secondsLevelMonitoringEnabled(java.lang.Boolean|IResolvable)
//  .secondsLevelMonitoringPeriod(java.lang.Number)
//  .securityGroupId(java.lang.String)
//  .tableNameCaseSensitivity(java.lang.Boolean|IResolvable)
//  .timeouts(TaurusdbMysqlInstanceV3Timeouts)
//  .timeZone(java.lang.String)
//  .volumeSize(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.availabilityZoneMode">availabilityZoneMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.dedicatedResourceId">dedicatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.enterpriseProjectId">enterpriseProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.masterAvailabilityZone">masterAvailabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.readReplicas">readReplicas</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.secondsLevelMonitoringEnabled">secondsLevelMonitoringEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.secondsLevelMonitoringPeriod">secondsLevelMonitoringPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.tableNameCaseSensitivity">tableNameCaseSensitivity</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.flavor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}.

---

##### `availabilityZoneMode`<sup>Optional</sup> <a name="availabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.availabilityZoneMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}.

---

##### `backupStrategy`<sup>Optional</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.backupStrategy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#backup_strategy TaurusdbMysqlInstanceV3#backup_strategy}

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.configurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.datastore"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#datastore TaurusdbMysqlInstanceV3#datastore}

---

##### `dedicatedResourceId`<sup>Optional</sup> <a name="dedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.dedicatedResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}.

---

##### `enterpriseProjectId`<sup>Optional</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.enterpriseProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masterAvailabilityZone`<sup>Optional</sup> <a name="masterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.masterAvailabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}.

---

##### `readReplicas`<sup>Optional</sup> <a name="readReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.readReplicas"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}.

---

##### `secondsLevelMonitoringEnabled`<sup>Optional</sup> <a name="secondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.secondsLevelMonitoringEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}.

---

##### `secondsLevelMonitoringPeriod`<sup>Optional</sup> <a name="secondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.secondsLevelMonitoringPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.securityGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}.

---

##### `tableNameCaseSensitivity`<sup>Optional</sup> <a name="tableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.tableNameCaseSensitivity"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#timeouts TaurusdbMysqlInstanceV3#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.Initializer.parameter.volumeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy">putBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore">putDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetAvailabilityZoneMode">resetAvailabilityZoneMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetBackupStrategy">resetBackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDatastore">resetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDedicatedResourceId">resetDedicatedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetEnterpriseProjectId">resetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetMasterAvailabilityZone">resetMasterAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetReadReplicas">resetReadReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringEnabled">resetSecondsLevelMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringPeriod">resetSecondsLevelMonitoringPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTableNameCaseSensitivity">resetTableNameCaseSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupStrategy` <a name="putBackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy"></a>

```java
public void putBackupStrategy(TaurusdbMysqlInstanceV3BackupStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putBackupStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---

##### `putDatastore` <a name="putDatastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore"></a>

```java
public void putDatastore(TaurusdbMysqlInstanceV3Datastore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts"></a>

```java
public void putTimeouts(TaurusdbMysqlInstanceV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---

##### `resetAvailabilityZoneMode` <a name="resetAvailabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetAvailabilityZoneMode"></a>

```java
public void resetAvailabilityZoneMode()
```

##### `resetBackupStrategy` <a name="resetBackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetBackupStrategy"></a>

```java
public void resetBackupStrategy()
```

##### `resetConfigurationId` <a name="resetConfigurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetConfigurationId"></a>

```java
public void resetConfigurationId()
```

##### `resetDatastore` <a name="resetDatastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDatastore"></a>

```java
public void resetDatastore()
```

##### `resetDedicatedResourceId` <a name="resetDedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetDedicatedResourceId"></a>

```java
public void resetDedicatedResourceId()
```

##### `resetEnterpriseProjectId` <a name="resetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetEnterpriseProjectId"></a>

```java
public void resetEnterpriseProjectId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetId"></a>

```java
public void resetId()
```

##### `resetMasterAvailabilityZone` <a name="resetMasterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetMasterAvailabilityZone"></a>

```java
public void resetMasterAvailabilityZone()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetPort"></a>

```java
public void resetPort()
```

##### `resetReadReplicas` <a name="resetReadReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetReadReplicas"></a>

```java
public void resetReadReplicas()
```

##### `resetSecondsLevelMonitoringEnabled` <a name="resetSecondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringEnabled"></a>

```java
public void resetSecondsLevelMonitoringEnabled()
```

##### `resetSecondsLevelMonitoringPeriod` <a name="resetSecondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecondsLevelMonitoringPeriod"></a>

```java
public void resetSecondsLevelMonitoringPeriod()
```

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetSecurityGroupId"></a>

```java
public void resetSecurityGroupId()
```

##### `resetTableNameCaseSensitivity` <a name="resetTableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTableNameCaseSensitivity"></a>

```java
public void resetTableNameCaseSensitivity()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetTimeZone"></a>

```java
public void resetTimeZone()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TaurusdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3;

TaurusdbMysqlInstanceV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3;

TaurusdbMysqlInstanceV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3;

TaurusdbMysqlInstanceV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3;

TaurusdbMysqlInstanceV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TaurusdbMysqlInstanceV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TaurusdbMysqlInstanceV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TaurusdbMysqlInstanceV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TaurusdbMysqlInstanceV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TaurusdbMysqlInstanceV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference">TaurusdbMysqlInstanceV3BackupStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference">TaurusdbMysqlInstanceV3DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dbUserName">dbUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList">TaurusdbMysqlInstanceV3NodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateDnsName">privateDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateWriteIp">privateWriteIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference">TaurusdbMysqlInstanceV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneModeInput">availabilityZoneModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategyInput">backupStrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationIdInput">configurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastoreInput">datastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceIdInput">dedicatedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectIdInput">enterpriseProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavorInput">flavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZoneInput">masterAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicasInput">readReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabledInput">secondsLevelMonitoringEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriodInput">secondsLevelMonitoringPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivityInput">tableNameCaseSensitivityInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneMode">availabilityZoneMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceId">dedicatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavor">flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZone">masterAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicas">readReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabled">secondsLevelMonitoringEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriod">secondsLevelMonitoringPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivity">tableNameCaseSensitivity</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupStrategy`<sup>Required</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategy"></a>

```java
public TaurusdbMysqlInstanceV3BackupStrategyOutputReference getBackupStrategy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference">TaurusdbMysqlInstanceV3BackupStrategyOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastore"></a>

```java
public TaurusdbMysqlInstanceV3DatastoreOutputReference getDatastore();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference">TaurusdbMysqlInstanceV3DatastoreOutputReference</a>

---

##### `dbUserName`<sup>Required</sup> <a name="dbUserName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dbUserName"></a>

```java
public java.lang.String getDbUserName();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nodes"></a>

```java
public TaurusdbMysqlInstanceV3NodesList getNodes();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList">TaurusdbMysqlInstanceV3NodesList</a>

---

##### `privateDnsName`<sup>Required</sup> <a name="privateDnsName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateDnsName"></a>

```java
public java.lang.String getPrivateDnsName();
```

- *Type:* java.lang.String

---

##### `privateWriteIp`<sup>Required</sup> <a name="privateWriteIp" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.privateWriteIp"></a>

```java
public java.lang.String getPrivateWriteIp();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeouts"></a>

```java
public TaurusdbMysqlInstanceV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference">TaurusdbMysqlInstanceV3TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `availabilityZoneModeInput`<sup>Optional</sup> <a name="availabilityZoneModeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneModeInput"></a>

```java
public java.lang.String getAvailabilityZoneModeInput();
```

- *Type:* java.lang.String

---

##### `backupStrategyInput`<sup>Optional</sup> <a name="backupStrategyInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.backupStrategyInput"></a>

```java
public TaurusdbMysqlInstanceV3BackupStrategy getBackupStrategyInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationIdInput"></a>

```java
public java.lang.String getConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.datastoreInput"></a>

```java
public TaurusdbMysqlInstanceV3Datastore getDatastoreInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---

##### `dedicatedResourceIdInput`<sup>Optional</sup> <a name="dedicatedResourceIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceIdInput"></a>

```java
public java.lang.String getDedicatedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `enterpriseProjectIdInput`<sup>Optional</sup> <a name="enterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectIdInput"></a>

```java
public java.lang.String getEnterpriseProjectIdInput();
```

- *Type:* java.lang.String

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavorInput"></a>

```java
public java.lang.String getFlavorInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `masterAvailabilityZoneInput`<sup>Optional</sup> <a name="masterAvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZoneInput"></a>

```java
public java.lang.String getMasterAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `readReplicasInput`<sup>Optional</sup> <a name="readReplicasInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicasInput"></a>

```java
public java.lang.Number getReadReplicasInput();
```

- *Type:* java.lang.Number

---

##### `secondsLevelMonitoringEnabledInput`<sup>Optional</sup> <a name="secondsLevelMonitoringEnabledInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSecondsLevelMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `secondsLevelMonitoringPeriodInput`<sup>Optional</sup> <a name="secondsLevelMonitoringPeriodInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriodInput"></a>

```java
public java.lang.Number getSecondsLevelMonitoringPeriodInput();
```

- *Type:* java.lang.Number

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tableNameCaseSensitivityInput`<sup>Optional</sup> <a name="tableNameCaseSensitivityInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivityInput"></a>

```java
public java.lang.Boolean|IResolvable getTableNameCaseSensitivityInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeoutsInput"></a>

```java
public IResolvable|TaurusdbMysqlInstanceV3Timeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneMode`<sup>Required</sup> <a name="availabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.availabilityZoneMode"></a>

```java
public java.lang.String getAvailabilityZoneMode();
```

- *Type:* java.lang.String

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

---

##### `dedicatedResourceId`<sup>Required</sup> <a name="dedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.dedicatedResourceId"></a>

```java
public java.lang.String getDedicatedResourceId();
```

- *Type:* java.lang.String

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.enterpriseProjectId"></a>

```java
public java.lang.String getEnterpriseProjectId();
```

- *Type:* java.lang.String

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `masterAvailabilityZone`<sup>Required</sup> <a name="masterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.masterAvailabilityZone"></a>

```java
public java.lang.String getMasterAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `readReplicas`<sup>Required</sup> <a name="readReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.readReplicas"></a>

```java
public java.lang.Number getReadReplicas();
```

- *Type:* java.lang.Number

---

##### `secondsLevelMonitoringEnabled`<sup>Required</sup> <a name="secondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSecondsLevelMonitoringEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `secondsLevelMonitoringPeriod`<sup>Required</sup> <a name="secondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.secondsLevelMonitoringPeriod"></a>

```java
public java.lang.Number getSecondsLevelMonitoringPeriod();
```

- *Type:* java.lang.Number

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tableNameCaseSensitivity`<sup>Required</sup> <a name="tableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tableNameCaseSensitivity"></a>

```java
public java.lang.Boolean|IResolvable getTableNameCaseSensitivity();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TaurusdbMysqlInstanceV3BackupStrategy <a name="TaurusdbMysqlInstanceV3BackupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3BackupStrategy;

TaurusdbMysqlInstanceV3BackupStrategy.builder()
    .startTime(java.lang.String)
//  .keepDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#start_time TaurusdbMysqlInstanceV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.keepDays">keepDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#keep_days TaurusdbMysqlInstanceV3#keep_days}. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#start_time TaurusdbMysqlInstanceV3#start_time}.

---

##### `keepDays`<sup>Optional</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy.property.keepDays"></a>

```java
public java.lang.Number getKeepDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#keep_days TaurusdbMysqlInstanceV3#keep_days}.

---

### TaurusdbMysqlInstanceV3Config <a name="TaurusdbMysqlInstanceV3Config" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3Config;

TaurusdbMysqlInstanceV3Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flavor(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .availabilityZoneMode(java.lang.String)
//  .backupStrategy(TaurusdbMysqlInstanceV3BackupStrategy)
//  .configurationId(java.lang.String)
//  .datastore(TaurusdbMysqlInstanceV3Datastore)
//  .dedicatedResourceId(java.lang.String)
//  .enterpriseProjectId(java.lang.String)
//  .id(java.lang.String)
//  .masterAvailabilityZone(java.lang.String)
//  .port(java.lang.Number)
//  .readReplicas(java.lang.Number)
//  .secondsLevelMonitoringEnabled(java.lang.Boolean|IResolvable)
//  .secondsLevelMonitoringPeriod(java.lang.Number)
//  .securityGroupId(java.lang.String)
//  .tableNameCaseSensitivity(java.lang.Boolean|IResolvable)
//  .timeouts(TaurusdbMysqlInstanceV3Timeouts)
//  .timeZone(java.lang.String)
//  .volumeSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.availabilityZoneMode">availabilityZoneMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.backupStrategy">backupStrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | backup_strategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.configurationId">configurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dedicatedResourceId">dedicatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.masterAvailabilityZone">masterAvailabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.readReplicas">readReplicas</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringEnabled">secondsLevelMonitoringEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringPeriod">secondsLevelMonitoringPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.tableNameCaseSensitivity">tableNameCaseSensitivity</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#flavor TaurusdbMysqlInstanceV3#flavor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#name TaurusdbMysqlInstanceV3#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#password TaurusdbMysqlInstanceV3#password}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#subnet_id TaurusdbMysqlInstanceV3#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#vpc_id TaurusdbMysqlInstanceV3#vpc_id}.

---

##### `availabilityZoneMode`<sup>Optional</sup> <a name="availabilityZoneMode" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.availabilityZoneMode"></a>

```java
public java.lang.String getAvailabilityZoneMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#availability_zone_mode TaurusdbMysqlInstanceV3#availability_zone_mode}.

---

##### `backupStrategy`<sup>Optional</sup> <a name="backupStrategy" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.backupStrategy"></a>

```java
public TaurusdbMysqlInstanceV3BackupStrategy getBackupStrategy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

backup_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#backup_strategy TaurusdbMysqlInstanceV3#backup_strategy}

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.configurationId"></a>

```java
public java.lang.String getConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#configuration_id TaurusdbMysqlInstanceV3#configuration_id}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.datastore"></a>

```java
public TaurusdbMysqlInstanceV3Datastore getDatastore();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#datastore TaurusdbMysqlInstanceV3#datastore}

---

##### `dedicatedResourceId`<sup>Optional</sup> <a name="dedicatedResourceId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.dedicatedResourceId"></a>

```java
public java.lang.String getDedicatedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#dedicated_resource_id TaurusdbMysqlInstanceV3#dedicated_resource_id}.

---

##### `enterpriseProjectId`<sup>Optional</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.enterpriseProjectId"></a>

```java
public java.lang.String getEnterpriseProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#enterprise_project_id TaurusdbMysqlInstanceV3#enterprise_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#id TaurusdbMysqlInstanceV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masterAvailabilityZone`<sup>Optional</sup> <a name="masterAvailabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.masterAvailabilityZone"></a>

```java
public java.lang.String getMasterAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#master_availability_zone TaurusdbMysqlInstanceV3#master_availability_zone}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#port TaurusdbMysqlInstanceV3#port}.

---

##### `readReplicas`<sup>Optional</sup> <a name="readReplicas" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.readReplicas"></a>

```java
public java.lang.Number getReadReplicas();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#read_replicas TaurusdbMysqlInstanceV3#read_replicas}.

---

##### `secondsLevelMonitoringEnabled`<sup>Optional</sup> <a name="secondsLevelMonitoringEnabled" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSecondsLevelMonitoringEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_enabled TaurusdbMysqlInstanceV3#seconds_level_monitoring_enabled}.

---

##### `secondsLevelMonitoringPeriod`<sup>Optional</sup> <a name="secondsLevelMonitoringPeriod" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.secondsLevelMonitoringPeriod"></a>

```java
public java.lang.Number getSecondsLevelMonitoringPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#seconds_level_monitoring_period TaurusdbMysqlInstanceV3#seconds_level_monitoring_period}.

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#security_group_id TaurusdbMysqlInstanceV3#security_group_id}.

---

##### `tableNameCaseSensitivity`<sup>Optional</sup> <a name="tableNameCaseSensitivity" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.tableNameCaseSensitivity"></a>

```java
public java.lang.Boolean|IResolvable getTableNameCaseSensitivity();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#table_name_case_sensitivity TaurusdbMysqlInstanceV3#table_name_case_sensitivity}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeouts"></a>

```java
public TaurusdbMysqlInstanceV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#timeouts TaurusdbMysqlInstanceV3#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#time_zone TaurusdbMysqlInstanceV3#time_zone}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Config.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#volume_size TaurusdbMysqlInstanceV3#volume_size}.

---

### TaurusdbMysqlInstanceV3Datastore <a name="TaurusdbMysqlInstanceV3Datastore" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3Datastore;

TaurusdbMysqlInstanceV3Datastore.builder()
    .engine(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#engine TaurusdbMysqlInstanceV3#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#version TaurusdbMysqlInstanceV3#version}. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#engine TaurusdbMysqlInstanceV3#engine}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#version TaurusdbMysqlInstanceV3#version}.

---

### TaurusdbMysqlInstanceV3Nodes <a name="TaurusdbMysqlInstanceV3Nodes" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3Nodes;

TaurusdbMysqlInstanceV3Nodes.builder()
    .build();
```


### TaurusdbMysqlInstanceV3Timeouts <a name="TaurusdbMysqlInstanceV3Timeouts" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3Timeouts;

TaurusdbMysqlInstanceV3Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#create TaurusdbMysqlInstanceV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#delete TaurusdbMysqlInstanceV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#update TaurusdbMysqlInstanceV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#create TaurusdbMysqlInstanceV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#delete TaurusdbMysqlInstanceV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/taurusdb_mysql_instance_v3#update TaurusdbMysqlInstanceV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TaurusdbMysqlInstanceV3BackupStrategyOutputReference <a name="TaurusdbMysqlInstanceV3BackupStrategyOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference;

new TaurusdbMysqlInstanceV3BackupStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resetKeepDays">resetKeepDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepDays` <a name="resetKeepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.resetKeepDays"></a>

```java
public void resetKeepDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDaysInput">keepDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDays">keepDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keepDaysInput`<sup>Optional</sup> <a name="keepDaysInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDaysInput"></a>

```java
public java.lang.Number getKeepDaysInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `keepDays`<sup>Required</sup> <a name="keepDays" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.keepDays"></a>

```java
public java.lang.Number getKeepDays();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategyOutputReference.property.internalValue"></a>

```java
public TaurusdbMysqlInstanceV3BackupStrategy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3BackupStrategy">TaurusdbMysqlInstanceV3BackupStrategy</a>

---


### TaurusdbMysqlInstanceV3DatastoreOutputReference <a name="TaurusdbMysqlInstanceV3DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3DatastoreOutputReference;

new TaurusdbMysqlInstanceV3DatastoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3DatastoreOutputReference.property.internalValue"></a>

```java
public TaurusdbMysqlInstanceV3Datastore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Datastore">TaurusdbMysqlInstanceV3Datastore</a>

---


### TaurusdbMysqlInstanceV3NodesList <a name="TaurusdbMysqlInstanceV3NodesList" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3NodesList;

new TaurusdbMysqlInstanceV3NodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get"></a>

```java
public TaurusdbMysqlInstanceV3NodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### TaurusdbMysqlInstanceV3NodesOutputReference <a name="TaurusdbMysqlInstanceV3NodesOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3NodesOutputReference;

new TaurusdbMysqlInstanceV3NodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.privateReadIp">privateReadIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes">TaurusdbMysqlInstanceV3Nodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateReadIp`<sup>Required</sup> <a name="privateReadIp" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.privateReadIp"></a>

```java
public java.lang.String getPrivateReadIp();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3NodesOutputReference.property.internalValue"></a>

```java
public TaurusdbMysqlInstanceV3Nodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Nodes">TaurusdbMysqlInstanceV3Nodes</a>

---


### TaurusdbMysqlInstanceV3TimeoutsOutputReference <a name="TaurusdbMysqlInstanceV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.taurusdb_mysql_instance_v3.TaurusdbMysqlInstanceV3TimeoutsOutputReference;

new TaurusdbMysqlInstanceV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3TimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|TaurusdbMysqlInstanceV3Timeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.taurusdbMysqlInstanceV3.TaurusdbMysqlInstanceV3Timeouts">TaurusdbMysqlInstanceV3Timeouts</a>

---



