# `asmServiceMeshV1` Submodule <a name="`asmServiceMeshV1` Submodule" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsmServiceMeshV1 <a name="AsmServiceMeshV1" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1;

AsmServiceMeshV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusters(IResolvable|java.util.List<AsmServiceMeshV1Clusters>)
    .name(java.lang.String)
    .type(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .ipv6Enable(java.lang.Boolean|IResolvable)
//  .proxyConfig(AsmServiceMeshV1ProxyConfig)
//  .telemetryConfigTracing(AsmServiceMeshV1TelemetryConfigTracing)
//  .timeouts(AsmServiceMeshV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.clusters">clusters</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>></code> | clusters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.ipv6Enable">ipv6Enable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.telemetryConfigTracing">telemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | telemetry_config_tracing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.clusters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>>

clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#clusters AsmServiceMeshV1#clusters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6Enable`<sup>Optional</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.ipv6Enable"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}.

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#proxy_config AsmServiceMeshV1#proxy_config}

---

##### `telemetryConfigTracing`<sup>Optional</sup> <a name="telemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.telemetryConfigTracing"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

telemetry_config_tracing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#telemetry_config_tracing AsmServiceMeshV1#telemetry_config_tracing}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#timeouts AsmServiceMeshV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters">putClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing">putTelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetIpv6Enable">resetIpv6Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTelemetryConfigTracing">resetTelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusters` <a name="putClusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters"></a>

```java
public void putClusters(IResolvable|java.util.List<AsmServiceMeshV1Clusters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig"></a>

```java
public void putProxyConfig(AsmServiceMeshV1ProxyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---

##### `putTelemetryConfigTracing` <a name="putTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing"></a>

```java
public void putTelemetryConfigTracing(AsmServiceMeshV1TelemetryConfigTracing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts"></a>

```java
public void putTimeouts(AsmServiceMeshV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetId"></a>

```java
public void resetId()
```

##### `resetIpv6Enable` <a name="resetIpv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetIpv6Enable"></a>

```java
public void resetIpv6Enable()
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetProxyConfig"></a>

```java
public void resetProxyConfig()
```

##### `resetTelemetryConfigTracing` <a name="resetTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTelemetryConfigTracing"></a>

```java
public void resetTelemetryConfigTracing()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1;

AsmServiceMeshV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1;

AsmServiceMeshV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1;

AsmServiceMeshV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1;

AsmServiceMeshV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AsmServiceMeshV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AsmServiceMeshV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AsmServiceMeshV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AsmServiceMeshV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusterIds">clusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusters">clusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList">AsmServiceMeshV1ClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference">AsmServiceMeshV1ProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracing">telemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference">AsmServiceMeshV1TelemetryConfigTracingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference">AsmServiceMeshV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clustersInput">clustersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6EnableInput">ipv6EnableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracingInput">telemetryConfigTracingInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6Enable">ipv6Enable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterIds`<sup>Required</sup> <a name="clusterIds" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusterIds"></a>

```java
public java.util.List<java.lang.String> getClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusters"></a>

```java
public AsmServiceMeshV1ClustersList getClusters();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList">AsmServiceMeshV1ClustersList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfig"></a>

```java
public AsmServiceMeshV1ProxyConfigOutputReference getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference">AsmServiceMeshV1ProxyConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `telemetryConfigTracing`<sup>Required</sup> <a name="telemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracing"></a>

```java
public AsmServiceMeshV1TelemetryConfigTracingOutputReference getTelemetryConfigTracing();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference">AsmServiceMeshV1TelemetryConfigTracingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeouts"></a>

```java
public AsmServiceMeshV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference">AsmServiceMeshV1TimeoutsOutputReference</a>

---

##### `clustersInput`<sup>Optional</sup> <a name="clustersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clustersInput"></a>

```java
public IResolvable|java.util.List<AsmServiceMeshV1Clusters> getClustersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6EnableInput`<sup>Optional</sup> <a name="ipv6EnableInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6EnableInput"></a>

```java
public java.lang.Boolean|IResolvable getIpv6EnableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfigInput"></a>

```java
public AsmServiceMeshV1ProxyConfig getProxyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---

##### `telemetryConfigTracingInput`<sup>Optional</sup> <a name="telemetryConfigTracingInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracingInput"></a>

```java
public AsmServiceMeshV1TelemetryConfigTracing getTelemetryConfigTracingInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeoutsInput"></a>

```java
public IResolvable|AsmServiceMeshV1Timeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6Enable`<sup>Required</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6Enable"></a>

```java
public java.lang.Boolean|IResolvable getIpv6Enable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AsmServiceMeshV1Clusters <a name="AsmServiceMeshV1Clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1Clusters;

AsmServiceMeshV1Clusters.builder()
    .clusterId(java.lang.String)
    .installationNodes(java.util.List<java.lang.String>)
//  .injectionNamespaces(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.installationNodes">installationNodes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.injectionNamespaces">injectionNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}.

---

##### `installationNodes`<sup>Required</sup> <a name="installationNodes" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.installationNodes"></a>

```java
public java.util.List<java.lang.String> getInstallationNodes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}.

---

##### `injectionNamespaces`<sup>Optional</sup> <a name="injectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.injectionNamespaces"></a>

```java
public java.util.List<java.lang.String> getInjectionNamespaces();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}.

---

### AsmServiceMeshV1Config <a name="AsmServiceMeshV1Config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1Config;

AsmServiceMeshV1Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusters(IResolvable|java.util.List<AsmServiceMeshV1Clusters>)
    .name(java.lang.String)
    .type(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .ipv6Enable(java.lang.Boolean|IResolvable)
//  .proxyConfig(AsmServiceMeshV1ProxyConfig)
//  .telemetryConfigTracing(AsmServiceMeshV1TelemetryConfigTracing)
//  .timeouts(AsmServiceMeshV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.clusters">clusters</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>></code> | clusters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.ipv6Enable">ipv6Enable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.telemetryConfigTracing">telemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | telemetry_config_tracing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.clusters"></a>

```java
public IResolvable|java.util.List<AsmServiceMeshV1Clusters> getClusters();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>>

clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#clusters AsmServiceMeshV1#clusters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6Enable`<sup>Optional</sup> <a name="ipv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.ipv6Enable"></a>

```java
public java.lang.Boolean|IResolvable getIpv6Enable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}.

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.proxyConfig"></a>

```java
public AsmServiceMeshV1ProxyConfig getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#proxy_config AsmServiceMeshV1#proxy_config}

---

##### `telemetryConfigTracing`<sup>Optional</sup> <a name="telemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.telemetryConfigTracing"></a>

```java
public AsmServiceMeshV1TelemetryConfigTracing getTelemetryConfigTracing();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

telemetry_config_tracing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#telemetry_config_tracing AsmServiceMeshV1#telemetry_config_tracing}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.timeouts"></a>

```java
public AsmServiceMeshV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#timeouts AsmServiceMeshV1#timeouts}

---

### AsmServiceMeshV1ProxyConfig <a name="AsmServiceMeshV1ProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1ProxyConfig;

AsmServiceMeshV1ProxyConfig.builder()
//  .excludeInboundPorts(java.lang.String)
//  .excludeIpRanges(java.lang.String)
//  .excludeOutboundPorts(java.lang.String)
//  .includeInboundPorts(java.lang.String)
//  .includeIpRanges(java.lang.String)
//  .includeOutboundPorts(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeInboundPorts">excludeInboundPorts</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeIpRanges">excludeIpRanges</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeOutboundPorts">excludeOutboundPorts</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeInboundPorts">includeInboundPorts</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeIpRanges">includeIpRanges</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeOutboundPorts">includeOutboundPorts</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}. |

---

##### `excludeInboundPorts`<sup>Optional</sup> <a name="excludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeInboundPorts"></a>

```java
public java.lang.String getExcludeInboundPorts();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}.

---

##### `excludeIpRanges`<sup>Optional</sup> <a name="excludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeIpRanges"></a>

```java
public java.lang.String getExcludeIpRanges();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}.

---

##### `excludeOutboundPorts`<sup>Optional</sup> <a name="excludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeOutboundPorts"></a>

```java
public java.lang.String getExcludeOutboundPorts();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}.

---

##### `includeInboundPorts`<sup>Optional</sup> <a name="includeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeInboundPorts"></a>

```java
public java.lang.String getIncludeInboundPorts();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}.

---

##### `includeIpRanges`<sup>Optional</sup> <a name="includeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeIpRanges"></a>

```java
public java.lang.String getIncludeIpRanges();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}.

---

##### `includeOutboundPorts`<sup>Optional</sup> <a name="includeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeOutboundPorts"></a>

```java
public java.lang.String getIncludeOutboundPorts();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}.

---

### AsmServiceMeshV1TelemetryConfigTracing <a name="AsmServiceMeshV1TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1TelemetryConfigTracing;

AsmServiceMeshV1TelemetryConfigTracing.builder()
//  .defaultProviders(java.util.List<java.lang.String>)
//  .extensionProviders(IResolvable|java.util.List<AsmServiceMeshV1TelemetryConfigTracingExtensionProviders>)
//  .randomSamplingPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.defaultProviders">defaultProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.extensionProviders">extensionProviders</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>></code> | extension_providers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.randomSamplingPercentage">randomSamplingPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}. |

---

##### `defaultProviders`<sup>Optional</sup> <a name="defaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.defaultProviders"></a>

```java
public java.util.List<java.lang.String> getDefaultProviders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}.

---

##### `extensionProviders`<sup>Optional</sup> <a name="extensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.extensionProviders"></a>

```java
public IResolvable|java.util.List<AsmServiceMeshV1TelemetryConfigTracingExtensionProviders> getExtensionProviders();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>>

extension_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#extension_providers AsmServiceMeshV1#extension_providers}

---

##### `randomSamplingPercentage`<sup>Optional</sup> <a name="randomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.randomSamplingPercentage"></a>

```java
public java.lang.Number getRandomSamplingPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}.

---

### AsmServiceMeshV1TelemetryConfigTracingExtensionProviders <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders;

AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.builder()
//  .name(java.lang.String)
//  .zipkinServiceAddr(java.lang.String)
//  .zipkinServicePort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServiceAddr">zipkinServiceAddr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServicePort">zipkinServicePort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `zipkinServiceAddr`<sup>Optional</sup> <a name="zipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServiceAddr"></a>

```java
public java.lang.String getZipkinServiceAddr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}.

---

##### `zipkinServicePort`<sup>Optional</sup> <a name="zipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServicePort"></a>

```java
public java.lang.Number getZipkinServicePort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}.

---

### AsmServiceMeshV1Timeouts <a name="AsmServiceMeshV1Timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1Timeouts;

AsmServiceMeshV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsmServiceMeshV1ClustersList <a name="AsmServiceMeshV1ClustersList" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1ClustersList;

new AsmServiceMeshV1ClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get"></a>

```java
public AsmServiceMeshV1ClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AsmServiceMeshV1Clusters> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>>

---


### AsmServiceMeshV1ClustersOutputReference <a name="AsmServiceMeshV1ClustersOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1ClustersOutputReference;

new AsmServiceMeshV1ClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resetInjectionNamespaces">resetInjectionNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInjectionNamespaces` <a name="resetInjectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resetInjectionNamespaces"></a>

```java
public void resetInjectionNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespacesInput">injectionNamespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodesInput">installationNodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespaces">injectionNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodes">installationNodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `injectionNamespacesInput`<sup>Optional</sup> <a name="injectionNamespacesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespacesInput"></a>

```java
public java.util.List<java.lang.String> getInjectionNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `installationNodesInput`<sup>Optional</sup> <a name="installationNodesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodesInput"></a>

```java
public java.util.List<java.lang.String> getInstallationNodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `injectionNamespaces`<sup>Required</sup> <a name="injectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespaces"></a>

```java
public java.util.List<java.lang.String> getInjectionNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `installationNodes`<sup>Required</sup> <a name="installationNodes" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodes"></a>

```java
public java.util.List<java.lang.String> getInstallationNodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.internalValue"></a>

```java
public IResolvable|AsmServiceMeshV1Clusters getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>

---


### AsmServiceMeshV1ProxyConfigOutputReference <a name="AsmServiceMeshV1ProxyConfigOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1ProxyConfigOutputReference;

new AsmServiceMeshV1ProxyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeInboundPorts">resetExcludeInboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeIpRanges">resetExcludeIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeOutboundPorts">resetExcludeOutboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeInboundPorts">resetIncludeInboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeIpRanges">resetIncludeIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeOutboundPorts">resetIncludeOutboundPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeInboundPorts` <a name="resetExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeInboundPorts"></a>

```java
public void resetExcludeInboundPorts()
```

##### `resetExcludeIpRanges` <a name="resetExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeIpRanges"></a>

```java
public void resetExcludeIpRanges()
```

##### `resetExcludeOutboundPorts` <a name="resetExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeOutboundPorts"></a>

```java
public void resetExcludeOutboundPorts()
```

##### `resetIncludeInboundPorts` <a name="resetIncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeInboundPorts"></a>

```java
public void resetIncludeInboundPorts()
```

##### `resetIncludeIpRanges` <a name="resetIncludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeIpRanges"></a>

```java
public void resetIncludeIpRanges()
```

##### `resetIncludeOutboundPorts` <a name="resetIncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeOutboundPorts"></a>

```java
public void resetIncludeOutboundPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPortsInput">excludeInboundPortsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRangesInput">excludeIpRangesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPortsInput">excludeOutboundPortsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPortsInput">includeInboundPortsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRangesInput">includeIpRangesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPortsInput">includeOutboundPortsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPorts">excludeInboundPorts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRanges">excludeIpRanges</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPorts">excludeOutboundPorts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPorts">includeInboundPorts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRanges">includeIpRanges</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPorts">includeOutboundPorts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInboundPortsInput`<sup>Optional</sup> <a name="excludeInboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPortsInput"></a>

```java
public java.lang.String getExcludeInboundPortsInput();
```

- *Type:* java.lang.String

---

##### `excludeIpRangesInput`<sup>Optional</sup> <a name="excludeIpRangesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRangesInput"></a>

```java
public java.lang.String getExcludeIpRangesInput();
```

- *Type:* java.lang.String

---

##### `excludeOutboundPortsInput`<sup>Optional</sup> <a name="excludeOutboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPortsInput"></a>

```java
public java.lang.String getExcludeOutboundPortsInput();
```

- *Type:* java.lang.String

---

##### `includeInboundPortsInput`<sup>Optional</sup> <a name="includeInboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPortsInput"></a>

```java
public java.lang.String getIncludeInboundPortsInput();
```

- *Type:* java.lang.String

---

##### `includeIpRangesInput`<sup>Optional</sup> <a name="includeIpRangesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRangesInput"></a>

```java
public java.lang.String getIncludeIpRangesInput();
```

- *Type:* java.lang.String

---

##### `includeOutboundPortsInput`<sup>Optional</sup> <a name="includeOutboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPortsInput"></a>

```java
public java.lang.String getIncludeOutboundPortsInput();
```

- *Type:* java.lang.String

---

##### `excludeInboundPorts`<sup>Required</sup> <a name="excludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPorts"></a>

```java
public java.lang.String getExcludeInboundPorts();
```

- *Type:* java.lang.String

---

##### `excludeIpRanges`<sup>Required</sup> <a name="excludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRanges"></a>

```java
public java.lang.String getExcludeIpRanges();
```

- *Type:* java.lang.String

---

##### `excludeOutboundPorts`<sup>Required</sup> <a name="excludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPorts"></a>

```java
public java.lang.String getExcludeOutboundPorts();
```

- *Type:* java.lang.String

---

##### `includeInboundPorts`<sup>Required</sup> <a name="includeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPorts"></a>

```java
public java.lang.String getIncludeInboundPorts();
```

- *Type:* java.lang.String

---

##### `includeIpRanges`<sup>Required</sup> <a name="includeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRanges"></a>

```java
public java.lang.String getIncludeIpRanges();
```

- *Type:* java.lang.String

---

##### `includeOutboundPorts`<sup>Required</sup> <a name="includeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPorts"></a>

```java
public java.lang.String getIncludeOutboundPorts();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.internalValue"></a>

```java
public AsmServiceMeshV1ProxyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---


### AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList;

new AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get"></a>

```java
public AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AsmServiceMeshV1TelemetryConfigTracingExtensionProviders> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>>

---


### AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference;

new AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServiceAddr">resetZipkinServiceAddr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServicePort">resetZipkinServicePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetZipkinServiceAddr` <a name="resetZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServiceAddr"></a>

```java
public void resetZipkinServiceAddr()
```

##### `resetZipkinServicePort` <a name="resetZipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServicePort"></a>

```java
public void resetZipkinServicePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddrInput">zipkinServiceAddrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePortInput">zipkinServicePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr">zipkinServiceAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort">zipkinServicePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `zipkinServiceAddrInput`<sup>Optional</sup> <a name="zipkinServiceAddrInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddrInput"></a>

```java
public java.lang.String getZipkinServiceAddrInput();
```

- *Type:* java.lang.String

---

##### `zipkinServicePortInput`<sup>Optional</sup> <a name="zipkinServicePortInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePortInput"></a>

```java
public java.lang.Number getZipkinServicePortInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `zipkinServiceAddr`<sup>Required</sup> <a name="zipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr"></a>

```java
public java.lang.String getZipkinServiceAddr();
```

- *Type:* java.lang.String

---

##### `zipkinServicePort`<sup>Required</sup> <a name="zipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort"></a>

```java
public java.lang.Number getZipkinServicePort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue"></a>

```java
public IResolvable|AsmServiceMeshV1TelemetryConfigTracingExtensionProviders getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>

---


### AsmServiceMeshV1TelemetryConfigTracingOutputReference <a name="AsmServiceMeshV1TelemetryConfigTracingOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1TelemetryConfigTracingOutputReference;

new AsmServiceMeshV1TelemetryConfigTracingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders">putExtensionProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetDefaultProviders">resetDefaultProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetExtensionProviders">resetExtensionProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetRandomSamplingPercentage">resetRandomSamplingPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtensionProviders` <a name="putExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders"></a>

```java
public void putExtensionProviders(IResolvable|java.util.List<AsmServiceMeshV1TelemetryConfigTracingExtensionProviders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>>

---

##### `resetDefaultProviders` <a name="resetDefaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetDefaultProviders"></a>

```java
public void resetDefaultProviders()
```

##### `resetExtensionProviders` <a name="resetExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetExtensionProviders"></a>

```java
public void resetExtensionProviders()
```

##### `resetRandomSamplingPercentage` <a name="resetRandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetRandomSamplingPercentage"></a>

```java
public void resetRandomSamplingPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProviders">extensionProviders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList">AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProvidersInput">defaultProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProvidersInput">extensionProvidersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentageInput">randomSamplingPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProviders">defaultProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentage">randomSamplingPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensionProviders`<sup>Required</sup> <a name="extensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProviders"></a>

```java
public AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList getExtensionProviders();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList">AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList</a>

---

##### `defaultProvidersInput`<sup>Optional</sup> <a name="defaultProvidersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProvidersInput"></a>

```java
public java.util.List<java.lang.String> getDefaultProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `extensionProvidersInput`<sup>Optional</sup> <a name="extensionProvidersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProvidersInput"></a>

```java
public IResolvable|java.util.List<AsmServiceMeshV1TelemetryConfigTracingExtensionProviders> getExtensionProvidersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>>

---

##### `randomSamplingPercentageInput`<sup>Optional</sup> <a name="randomSamplingPercentageInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentageInput"></a>

```java
public java.lang.Number getRandomSamplingPercentageInput();
```

- *Type:* java.lang.Number

---

##### `defaultProviders`<sup>Required</sup> <a name="defaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProviders"></a>

```java
public java.util.List<java.lang.String> getDefaultProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `randomSamplingPercentage`<sup>Required</sup> <a name="randomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentage"></a>

```java
public java.lang.Number getRandomSamplingPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.internalValue"></a>

```java
public AsmServiceMeshV1TelemetryConfigTracing getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---


### AsmServiceMeshV1TimeoutsOutputReference <a name="AsmServiceMeshV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.asm_service_mesh_v1.AsmServiceMeshV1TimeoutsOutputReference;

new AsmServiceMeshV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AsmServiceMeshV1Timeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---



