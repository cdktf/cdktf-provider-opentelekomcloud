# `asmServiceMeshV1` Submodule <a name="`asmServiceMeshV1` Submodule" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsmServiceMeshV1 <a name="AsmServiceMeshV1" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.NewAsmServiceMeshV1(scope Construct, id *string, config AsmServiceMeshV1Config) AsmServiceMeshV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config">AsmServiceMeshV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config">AsmServiceMeshV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters">PutClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing">PutTelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetIpv6Enable">ResetIpv6Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTelemetryConfigTracing">ResetTelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusters` <a name="PutClusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters"></a>

```go
func PutClusters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig"></a>

```go
func PutProxyConfig(value AsmServiceMeshV1ProxyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---

##### `PutTelemetryConfigTracing` <a name="PutTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing"></a>

```go
func PutTelemetryConfigTracing(value AsmServiceMeshV1TelemetryConfigTracing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts"></a>

```go
func PutTimeouts(value AsmServiceMeshV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv6Enable` <a name="ResetIpv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetIpv6Enable"></a>

```go
func ResetIpv6Enable()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetProxyConfig"></a>

```go
func ResetProxyConfig()
```

##### `ResetTelemetryConfigTracing` <a name="ResetTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTelemetryConfigTracing"></a>

```go
func ResetTelemetryConfigTracing()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.AsmServiceMeshV1_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.AsmServiceMeshV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.AsmServiceMeshV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.AsmServiceMeshV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AsmServiceMeshV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AsmServiceMeshV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AsmServiceMeshV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusterIds">ClusterIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusters">Clusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList">AsmServiceMeshV1ClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference">AsmServiceMeshV1ProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracing">TelemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference">AsmServiceMeshV1TelemetryConfigTracingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference">AsmServiceMeshV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clustersInput">ClustersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6EnableInput">Ipv6EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracingInput">TelemetryConfigTracingInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6Enable">Ipv6Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterIds`<sup>Required</sup> <a name="ClusterIds" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusterIds"></a>

```go
func ClusterIds() *[]*string
```

- *Type:* *[]*string

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusters"></a>

```go
func Clusters() AsmServiceMeshV1ClustersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList">AsmServiceMeshV1ClustersList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfig"></a>

```go
func ProxyConfig() AsmServiceMeshV1ProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference">AsmServiceMeshV1ProxyConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TelemetryConfigTracing`<sup>Required</sup> <a name="TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracing"></a>

```go
func TelemetryConfigTracing() AsmServiceMeshV1TelemetryConfigTracingOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference">AsmServiceMeshV1TelemetryConfigTracingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeouts"></a>

```go
func Timeouts() AsmServiceMeshV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference">AsmServiceMeshV1TimeoutsOutputReference</a>

---

##### `ClustersInput`<sup>Optional</sup> <a name="ClustersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clustersInput"></a>

```go
func ClustersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv6EnableInput`<sup>Optional</sup> <a name="Ipv6EnableInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6EnableInput"></a>

```go
func Ipv6EnableInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfigInput"></a>

```go
func ProxyConfigInput() AsmServiceMeshV1ProxyConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---

##### `TelemetryConfigTracingInput`<sup>Optional</sup> <a name="TelemetryConfigTracingInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracingInput"></a>

```go
func TelemetryConfigTracingInput() AsmServiceMeshV1TelemetryConfigTracing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv6Enable`<sup>Required</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6Enable"></a>

```go
func Ipv6Enable() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AsmServiceMeshV1Clusters <a name="AsmServiceMeshV1Clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

&asmservicemeshv1.AsmServiceMeshV1Clusters {
	ClusterId: *string,
	InstallationNodes: *[]*string,
	InjectionNamespaces: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.installationNodes">InstallationNodes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.injectionNamespaces">InjectionNamespaces</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}.

---

##### `InstallationNodes`<sup>Required</sup> <a name="InstallationNodes" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.installationNodes"></a>

```go
InstallationNodes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}.

---

##### `InjectionNamespaces`<sup>Optional</sup> <a name="InjectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.injectionNamespaces"></a>

```go
InjectionNamespaces *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}.

---

### AsmServiceMeshV1Config <a name="AsmServiceMeshV1Config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

&asmservicemeshv1.AsmServiceMeshV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Clusters: interface{},
	Name: *string,
	Type: *string,
	Version: *string,
	Id: *string,
	Ipv6Enable: interface{},
	ProxyConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig,
	TelemetryConfigTracing: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12.asmServiceMeshV1.AsmServiceMeshV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.clusters">Clusters</a></code> | <code>interface{}</code> | clusters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.ipv6Enable">Ipv6Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.telemetryConfigTracing">TelemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | telemetry_config_tracing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.clusters"></a>

```go
Clusters interface{}
```

- *Type:* interface{}

clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#clusters AsmServiceMeshV1#clusters}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6Enable`<sup>Optional</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.ipv6Enable"></a>

```go
Ipv6Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}.

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.proxyConfig"></a>

```go
ProxyConfig AsmServiceMeshV1ProxyConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#proxy_config AsmServiceMeshV1#proxy_config}

---

##### `TelemetryConfigTracing`<sup>Optional</sup> <a name="TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.telemetryConfigTracing"></a>

```go
TelemetryConfigTracing AsmServiceMeshV1TelemetryConfigTracing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

telemetry_config_tracing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#telemetry_config_tracing AsmServiceMeshV1#telemetry_config_tracing}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.timeouts"></a>

```go
Timeouts AsmServiceMeshV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#timeouts AsmServiceMeshV1#timeouts}

---

### AsmServiceMeshV1ProxyConfig <a name="AsmServiceMeshV1ProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

&asmservicemeshv1.AsmServiceMeshV1ProxyConfig {
	ExcludeInboundPorts: *string,
	ExcludeIpRanges: *string,
	ExcludeOutboundPorts: *string,
	IncludeInboundPorts: *string,
	IncludeIpRanges: *string,
	IncludeOutboundPorts: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeInboundPorts">ExcludeInboundPorts</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeIpRanges">ExcludeIpRanges</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeOutboundPorts">ExcludeOutboundPorts</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeInboundPorts">IncludeInboundPorts</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeIpRanges">IncludeIpRanges</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeOutboundPorts">IncludeOutboundPorts</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}. |

---

##### `ExcludeInboundPorts`<sup>Optional</sup> <a name="ExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeInboundPorts"></a>

```go
ExcludeInboundPorts *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}.

---

##### `ExcludeIpRanges`<sup>Optional</sup> <a name="ExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeIpRanges"></a>

```go
ExcludeIpRanges *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}.

---

##### `ExcludeOutboundPorts`<sup>Optional</sup> <a name="ExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeOutboundPorts"></a>

```go
ExcludeOutboundPorts *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}.

---

##### `IncludeInboundPorts`<sup>Optional</sup> <a name="IncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeInboundPorts"></a>

```go
IncludeInboundPorts *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}.

---

##### `IncludeIpRanges`<sup>Optional</sup> <a name="IncludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeIpRanges"></a>

```go
IncludeIpRanges *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}.

---

##### `IncludeOutboundPorts`<sup>Optional</sup> <a name="IncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeOutboundPorts"></a>

```go
IncludeOutboundPorts *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}.

---

### AsmServiceMeshV1TelemetryConfigTracing <a name="AsmServiceMeshV1TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

&asmservicemeshv1.AsmServiceMeshV1TelemetryConfigTracing {
	DefaultProviders: *[]*string,
	ExtensionProviders: interface{},
	RandomSamplingPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.defaultProviders">DefaultProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.extensionProviders">ExtensionProviders</a></code> | <code>interface{}</code> | extension_providers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.randomSamplingPercentage">RandomSamplingPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}. |

---

##### `DefaultProviders`<sup>Optional</sup> <a name="DefaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.defaultProviders"></a>

```go
DefaultProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}.

---

##### `ExtensionProviders`<sup>Optional</sup> <a name="ExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.extensionProviders"></a>

```go
ExtensionProviders interface{}
```

- *Type:* interface{}

extension_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#extension_providers AsmServiceMeshV1#extension_providers}

---

##### `RandomSamplingPercentage`<sup>Optional</sup> <a name="RandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.randomSamplingPercentage"></a>

```go
RandomSamplingPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}.

---

### AsmServiceMeshV1TelemetryConfigTracingExtensionProviders <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

&asmservicemeshv1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders {
	Name: *string,
	ZipkinServiceAddr: *string,
	ZipkinServicePort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServiceAddr">ZipkinServiceAddr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServicePort">ZipkinServicePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `ZipkinServiceAddr`<sup>Optional</sup> <a name="ZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServiceAddr"></a>

```go
ZipkinServiceAddr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}.

---

##### `ZipkinServicePort`<sup>Optional</sup> <a name="ZipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServicePort"></a>

```go
ZipkinServicePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}.

---

### AsmServiceMeshV1Timeouts <a name="AsmServiceMeshV1Timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

&asmservicemeshv1.AsmServiceMeshV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsmServiceMeshV1ClustersList <a name="AsmServiceMeshV1ClustersList" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.NewAsmServiceMeshV1ClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AsmServiceMeshV1ClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get"></a>

```go
func Get(index *f64) AsmServiceMeshV1ClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AsmServiceMeshV1ClustersOutputReference <a name="AsmServiceMeshV1ClustersOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.NewAsmServiceMeshV1ClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AsmServiceMeshV1ClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resetInjectionNamespaces">ResetInjectionNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInjectionNamespaces` <a name="ResetInjectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resetInjectionNamespaces"></a>

```go
func ResetInjectionNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespacesInput">InjectionNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodesInput">InstallationNodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespaces">InjectionNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodes">InstallationNodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `InjectionNamespacesInput`<sup>Optional</sup> <a name="InjectionNamespacesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespacesInput"></a>

```go
func InjectionNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstallationNodesInput`<sup>Optional</sup> <a name="InstallationNodesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodesInput"></a>

```go
func InstallationNodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `InjectionNamespaces`<sup>Required</sup> <a name="InjectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespaces"></a>

```go
func InjectionNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InstallationNodes`<sup>Required</sup> <a name="InstallationNodes" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodes"></a>

```go
func InstallationNodes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AsmServiceMeshV1ProxyConfigOutputReference <a name="AsmServiceMeshV1ProxyConfigOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.NewAsmServiceMeshV1ProxyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AsmServiceMeshV1ProxyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeInboundPorts">ResetExcludeInboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeIpRanges">ResetExcludeIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeOutboundPorts">ResetExcludeOutboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeInboundPorts">ResetIncludeInboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeIpRanges">ResetIncludeIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeOutboundPorts">ResetIncludeOutboundPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeInboundPorts` <a name="ResetExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeInboundPorts"></a>

```go
func ResetExcludeInboundPorts()
```

##### `ResetExcludeIpRanges` <a name="ResetExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeIpRanges"></a>

```go
func ResetExcludeIpRanges()
```

##### `ResetExcludeOutboundPorts` <a name="ResetExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeOutboundPorts"></a>

```go
func ResetExcludeOutboundPorts()
```

##### `ResetIncludeInboundPorts` <a name="ResetIncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeInboundPorts"></a>

```go
func ResetIncludeInboundPorts()
```

##### `ResetIncludeIpRanges` <a name="ResetIncludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeIpRanges"></a>

```go
func ResetIncludeIpRanges()
```

##### `ResetIncludeOutboundPorts` <a name="ResetIncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeOutboundPorts"></a>

```go
func ResetIncludeOutboundPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPortsInput">ExcludeInboundPortsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRangesInput">ExcludeIpRangesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPortsInput">ExcludeOutboundPortsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPortsInput">IncludeInboundPortsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRangesInput">IncludeIpRangesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPortsInput">IncludeOutboundPortsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPorts">ExcludeInboundPorts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRanges">ExcludeIpRanges</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPorts">ExcludeOutboundPorts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPorts">IncludeInboundPorts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRanges">IncludeIpRanges</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPorts">IncludeOutboundPorts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInboundPortsInput`<sup>Optional</sup> <a name="ExcludeInboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPortsInput"></a>

```go
func ExcludeInboundPortsInput() *string
```

- *Type:* *string

---

##### `ExcludeIpRangesInput`<sup>Optional</sup> <a name="ExcludeIpRangesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRangesInput"></a>

```go
func ExcludeIpRangesInput() *string
```

- *Type:* *string

---

##### `ExcludeOutboundPortsInput`<sup>Optional</sup> <a name="ExcludeOutboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPortsInput"></a>

```go
func ExcludeOutboundPortsInput() *string
```

- *Type:* *string

---

##### `IncludeInboundPortsInput`<sup>Optional</sup> <a name="IncludeInboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPortsInput"></a>

```go
func IncludeInboundPortsInput() *string
```

- *Type:* *string

---

##### `IncludeIpRangesInput`<sup>Optional</sup> <a name="IncludeIpRangesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRangesInput"></a>

```go
func IncludeIpRangesInput() *string
```

- *Type:* *string

---

##### `IncludeOutboundPortsInput`<sup>Optional</sup> <a name="IncludeOutboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPortsInput"></a>

```go
func IncludeOutboundPortsInput() *string
```

- *Type:* *string

---

##### `ExcludeInboundPorts`<sup>Required</sup> <a name="ExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPorts"></a>

```go
func ExcludeInboundPorts() *string
```

- *Type:* *string

---

##### `ExcludeIpRanges`<sup>Required</sup> <a name="ExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRanges"></a>

```go
func ExcludeIpRanges() *string
```

- *Type:* *string

---

##### `ExcludeOutboundPorts`<sup>Required</sup> <a name="ExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPorts"></a>

```go
func ExcludeOutboundPorts() *string
```

- *Type:* *string

---

##### `IncludeInboundPorts`<sup>Required</sup> <a name="IncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPorts"></a>

```go
func IncludeInboundPorts() *string
```

- *Type:* *string

---

##### `IncludeIpRanges`<sup>Required</sup> <a name="IncludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRanges"></a>

```go
func IncludeIpRanges() *string
```

- *Type:* *string

---

##### `IncludeOutboundPorts`<sup>Required</sup> <a name="IncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPorts"></a>

```go
func IncludeOutboundPorts() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AsmServiceMeshV1ProxyConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---


### AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.NewAsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get"></a>

```go
func Get(index *f64) AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.NewAsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServiceAddr">ResetZipkinServiceAddr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServicePort">ResetZipkinServicePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetZipkinServiceAddr` <a name="ResetZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServiceAddr"></a>

```go
func ResetZipkinServiceAddr()
```

##### `ResetZipkinServicePort` <a name="ResetZipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServicePort"></a>

```go
func ResetZipkinServicePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddrInput">ZipkinServiceAddrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePortInput">ZipkinServicePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr">ZipkinServiceAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort">ZipkinServicePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ZipkinServiceAddrInput`<sup>Optional</sup> <a name="ZipkinServiceAddrInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddrInput"></a>

```go
func ZipkinServiceAddrInput() *string
```

- *Type:* *string

---

##### `ZipkinServicePortInput`<sup>Optional</sup> <a name="ZipkinServicePortInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePortInput"></a>

```go
func ZipkinServicePortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ZipkinServiceAddr`<sup>Required</sup> <a name="ZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr"></a>

```go
func ZipkinServiceAddr() *string
```

- *Type:* *string

---

##### `ZipkinServicePort`<sup>Required</sup> <a name="ZipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort"></a>

```go
func ZipkinServicePort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AsmServiceMeshV1TelemetryConfigTracingOutputReference <a name="AsmServiceMeshV1TelemetryConfigTracingOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.NewAsmServiceMeshV1TelemetryConfigTracingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AsmServiceMeshV1TelemetryConfigTracingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders">PutExtensionProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetDefaultProviders">ResetDefaultProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetExtensionProviders">ResetExtensionProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetRandomSamplingPercentage">ResetRandomSamplingPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensionProviders` <a name="PutExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders"></a>

```go
func PutExtensionProviders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultProviders` <a name="ResetDefaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetDefaultProviders"></a>

```go
func ResetDefaultProviders()
```

##### `ResetExtensionProviders` <a name="ResetExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetExtensionProviders"></a>

```go
func ResetExtensionProviders()
```

##### `ResetRandomSamplingPercentage` <a name="ResetRandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetRandomSamplingPercentage"></a>

```go
func ResetRandomSamplingPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProviders">ExtensionProviders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList">AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProvidersInput">DefaultProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProvidersInput">ExtensionProvidersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentageInput">RandomSamplingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProviders">DefaultProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentage">RandomSamplingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtensionProviders`<sup>Required</sup> <a name="ExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProviders"></a>

```go
func ExtensionProviders() AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList">AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList</a>

---

##### `DefaultProvidersInput`<sup>Optional</sup> <a name="DefaultProvidersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProvidersInput"></a>

```go
func DefaultProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExtensionProvidersInput`<sup>Optional</sup> <a name="ExtensionProvidersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProvidersInput"></a>

```go
func ExtensionProvidersInput() interface{}
```

- *Type:* interface{}

---

##### `RandomSamplingPercentageInput`<sup>Optional</sup> <a name="RandomSamplingPercentageInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentageInput"></a>

```go
func RandomSamplingPercentageInput() *f64
```

- *Type:* *f64

---

##### `DefaultProviders`<sup>Required</sup> <a name="DefaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProviders"></a>

```go
func DefaultProviders() *[]*string
```

- *Type:* *[]*string

---

##### `RandomSamplingPercentage`<sup>Required</sup> <a name="RandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentage"></a>

```go
func RandomSamplingPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.internalValue"></a>

```go
func InternalValue() AsmServiceMeshV1TelemetryConfigTracing
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---


### AsmServiceMeshV1TimeoutsOutputReference <a name="AsmServiceMeshV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/asmservicemeshv1"

asmservicemeshv1.NewAsmServiceMeshV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AsmServiceMeshV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



