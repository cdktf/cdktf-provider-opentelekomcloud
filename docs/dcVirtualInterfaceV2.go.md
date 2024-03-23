# `dcVirtualInterfaceV2` Submodule <a name="`dcVirtualInterfaceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfaceV2 <a name="DcVirtualInterfaceV2" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2 opentelekomcloud_dc_virtual_interface_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dcvirtualinterfacev2"

dcvirtualinterfacev2.NewDcVirtualInterfaceV2(scope Construct, id *string, config DcVirtualInterfaceV2Config) DcVirtualInterfaceV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config">DcVirtualInterfaceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config">DcVirtualInterfaceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.putRemoteEpGroup">PutRemoteEpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetAsn">ResetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetBgpMd5">ResetBgpMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableBfd">ResetEnableBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableNqa">ResetEnableNqa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLagId">ResetLagId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLocalGatewayV4Ip">ResetLocalGatewayV4Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetRemoteGatewayV4Ip">ResetRemoteGatewayV4Ip</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRemoteEpGroup` <a name="PutRemoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.putRemoteEpGroup"></a>

```go
func PutRemoteEpGroup(value DcVirtualInterfaceV2RemoteEpGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.putRemoteEpGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup">DcVirtualInterfaceV2RemoteEpGroup</a>

---

##### `ResetAsn` <a name="ResetAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetAsn"></a>

```go
func ResetAsn()
```

##### `ResetBgpMd5` <a name="ResetBgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetBgpMd5"></a>

```go
func ResetBgpMd5()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableBfd` <a name="ResetEnableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableBfd"></a>

```go
func ResetEnableBfd()
```

##### `ResetEnableNqa` <a name="ResetEnableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableNqa"></a>

```go
func ResetEnableNqa()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetId"></a>

```go
func ResetId()
```

##### `ResetLagId` <a name="ResetLagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLagId"></a>

```go
func ResetLagId()
```

##### `ResetLocalGatewayV4Ip` <a name="ResetLocalGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLocalGatewayV4Ip"></a>

```go
func ResetLocalGatewayV4Ip()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRemoteGatewayV4Ip` <a name="ResetRemoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetRemoteGatewayV4Ip"></a>

```go
func ResetRemoteGatewayV4Ip()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualInterfaceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dcvirtualinterfacev2"

dcvirtualinterfacev2.DcVirtualInterfaceV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dcvirtualinterfacev2"

dcvirtualinterfacev2.DcVirtualInterfaceV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dcvirtualinterfacev2"

dcvirtualinterfacev2.DcVirtualInterfaceV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dcvirtualinterfacev2"

dcvirtualinterfacev2.DcVirtualInterfaceV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DcVirtualInterfaceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DcVirtualInterfaceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DcVirtualInterfaceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfaceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroup">RemoteEpGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference">DcVirtualInterfaceV2RemoteEpGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupId">RemoteEpGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asnInput">AsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidthInput">BandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5Input">BgpMd5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectIdInput">DirectConnectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfdInput">EnableBfdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqaInput">EnableNqaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagIdInput">LagIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4IpInput">LocalGatewayV4IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupInput">RemoteEpGroupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup">DcVirtualInterfaceV2RemoteEpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4IpInput">RemoteGatewayV4IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeModeInput">RouteModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayIdInput">VirtualGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlanInput">VlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidth">Bandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5">BgpMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectId">DirectConnectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfd">EnableBfd</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqa">EnableNqa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagId">LagId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4Ip">LocalGatewayV4Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4Ip">RemoteGatewayV4Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeMode">RouteMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayId">VirtualGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `RemoteEpGroup`<sup>Required</sup> <a name="RemoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroup"></a>

```go
func RemoteEpGroup() DcVirtualInterfaceV2RemoteEpGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference">DcVirtualInterfaceV2RemoteEpGroupOutputReference</a>

---

##### `RemoteEpGroupId`<sup>Required</sup> <a name="RemoteEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupId"></a>

```go
func RemoteEpGroupId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asnInput"></a>

```go
func AsnInput() *f64
```

- *Type:* *f64

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidthInput"></a>

```go
func BandwidthInput() *f64
```

- *Type:* *f64

---

##### `BgpMd5Input`<sup>Optional</sup> <a name="BgpMd5Input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5Input"></a>

```go
func BgpMd5Input() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DirectConnectIdInput`<sup>Optional</sup> <a name="DirectConnectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectIdInput"></a>

```go
func DirectConnectIdInput() *string
```

- *Type:* *string

---

##### `EnableBfdInput`<sup>Optional</sup> <a name="EnableBfdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfdInput"></a>

```go
func EnableBfdInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNqaInput`<sup>Optional</sup> <a name="EnableNqaInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqaInput"></a>

```go
func EnableNqaInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LagIdInput`<sup>Optional</sup> <a name="LagIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagIdInput"></a>

```go
func LagIdInput() *string
```

- *Type:* *string

---

##### `LocalGatewayV4IpInput`<sup>Optional</sup> <a name="LocalGatewayV4IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4IpInput"></a>

```go
func LocalGatewayV4IpInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RemoteEpGroupInput`<sup>Optional</sup> <a name="RemoteEpGroupInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupInput"></a>

```go
func RemoteEpGroupInput() DcVirtualInterfaceV2RemoteEpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup">DcVirtualInterfaceV2RemoteEpGroup</a>

---

##### `RemoteGatewayV4IpInput`<sup>Optional</sup> <a name="RemoteGatewayV4IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4IpInput"></a>

```go
func RemoteGatewayV4IpInput() *string
```

- *Type:* *string

---

##### `RouteModeInput`<sup>Optional</sup> <a name="RouteModeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeModeInput"></a>

```go
func RouteModeInput() *string
```

- *Type:* *string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceTypeInput"></a>

```go
func ServiceTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VirtualGatewayIdInput`<sup>Optional</sup> <a name="VirtualGatewayIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayIdInput"></a>

```go
func VirtualGatewayIdInput() *string
```

- *Type:* *string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlanInput"></a>

```go
func VlanInput() *f64
```

- *Type:* *f64

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidth"></a>

```go
func Bandwidth() *f64
```

- *Type:* *f64

---

##### `BgpMd5`<sup>Required</sup> <a name="BgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5"></a>

```go
func BgpMd5() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DirectConnectId`<sup>Required</sup> <a name="DirectConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectId"></a>

```go
func DirectConnectId() *string
```

- *Type:* *string

---

##### `EnableBfd`<sup>Required</sup> <a name="EnableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfd"></a>

```go
func EnableBfd() interface{}
```

- *Type:* interface{}

---

##### `EnableNqa`<sup>Required</sup> <a name="EnableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqa"></a>

```go
func EnableNqa() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LagId`<sup>Required</sup> <a name="LagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagId"></a>

```go
func LagId() *string
```

- *Type:* *string

---

##### `LocalGatewayV4Ip`<sup>Required</sup> <a name="LocalGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4Ip"></a>

```go
func LocalGatewayV4Ip() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RemoteGatewayV4Ip`<sup>Required</sup> <a name="RemoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4Ip"></a>

```go
func RemoteGatewayV4Ip() *string
```

- *Type:* *string

---

##### `RouteMode`<sup>Required</sup> <a name="RouteMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeMode"></a>

```go
func RouteMode() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VirtualGatewayId`<sup>Required</sup> <a name="VirtualGatewayId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayId"></a>

```go
func VirtualGatewayId() *string
```

- *Type:* *string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfaceV2Config <a name="DcVirtualInterfaceV2Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dcvirtualinterfacev2"

&dcvirtualinterfacev2.DcVirtualInterfaceV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bandwidth: *f64,
	DirectConnectId: *string,
	Name: *string,
	RemoteEpGroup: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup,
	RouteMode: *string,
	ServiceType: *string,
	Type: *string,
	VirtualGatewayId: *string,
	Vlan: *f64,
	Asn: *f64,
	BgpMd5: *string,
	Description: *string,
	EnableBfd: interface{},
	EnableNqa: interface{},
	Id: *string,
	LagId: *string,
	LocalGatewayV4Ip: *string,
	ProjectId: *string,
	RemoteGatewayV4Ip: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bandwidth">Bandwidth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.directConnectId">DirectConnectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteEpGroup">RemoteEpGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup">DcVirtualInterfaceV2RemoteEpGroup</a></code> | remote_ep_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.routeMode">RouteMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.serviceType">ServiceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.virtualGatewayId">VirtualGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.vlan">Vlan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.asn">Asn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bgpMd5">BgpMd5</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableBfd">EnableBfd</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableNqa">EnableNqa</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lagId">LagId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.localGatewayV4Ip">LocalGatewayV4Ip</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteGatewayV4Ip">RemoteGatewayV4Ip</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bandwidth"></a>

```go
Bandwidth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}.

---

##### `DirectConnectId`<sup>Required</sup> <a name="DirectConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.directConnectId"></a>

```go
DirectConnectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}.

---

##### `RemoteEpGroup`<sup>Required</sup> <a name="RemoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteEpGroup"></a>

```go
RemoteEpGroup DcVirtualInterfaceV2RemoteEpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup">DcVirtualInterfaceV2RemoteEpGroup</a>

remote_ep_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#remote_ep_group DcVirtualInterfaceV2#remote_ep_group}

---

##### `RouteMode`<sup>Required</sup> <a name="RouteMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.routeMode"></a>

```go
RouteMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}.

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.serviceType"></a>

```go
ServiceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}.

---

##### `VirtualGatewayId`<sup>Required</sup> <a name="VirtualGatewayId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.virtualGatewayId"></a>

```go
VirtualGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}.

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.vlan"></a>

```go
Vlan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}.

---

##### `Asn`<sup>Optional</sup> <a name="Asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.asn"></a>

```go
Asn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}.

---

##### `BgpMd5`<sup>Optional</sup> <a name="BgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bgpMd5"></a>

```go
BgpMd5 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}.

---

##### `EnableBfd`<sup>Optional</sup> <a name="EnableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableBfd"></a>

```go
EnableBfd interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}.

---

##### `EnableNqa`<sup>Optional</sup> <a name="EnableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableNqa"></a>

```go
EnableNqa interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LagId`<sup>Optional</sup> <a name="LagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lagId"></a>

```go
LagId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}.

---

##### `LocalGatewayV4Ip`<sup>Optional</sup> <a name="LocalGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.localGatewayV4Ip"></a>

```go
LocalGatewayV4Ip *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}.

---

##### `RemoteGatewayV4Ip`<sup>Optional</sup> <a name="RemoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteGatewayV4Ip"></a>

```go
RemoteGatewayV4Ip *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}.

---

### DcVirtualInterfaceV2RemoteEpGroup <a name="DcVirtualInterfaceV2RemoteEpGroup" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dcvirtualinterfacev2"

&dcvirtualinterfacev2.DcVirtualInterfaceV2RemoteEpGroup {
	Endpoints: *[]*string,
	Description: *string,
	Name: *string,
	ProjectId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.endpoints">Endpoints</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#endpoints DcVirtualInterfaceV2#endpoints}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}. |

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.endpoints"></a>

```go
Endpoints *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#endpoints DcVirtualInterfaceV2#endpoints}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.5/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DcVirtualInterfaceV2RemoteEpGroupOutputReference <a name="DcVirtualInterfaceV2RemoteEpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dcvirtualinterfacev2"

dcvirtualinterfacev2.NewDcVirtualInterfaceV2RemoteEpGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DcVirtualInterfaceV2RemoteEpGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.endpointsInput">EndpointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.endpoints">Endpoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup">DcVirtualInterfaceV2RemoteEpGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.endpointsInput"></a>

```go
func EndpointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.endpoints"></a>

```go
func Endpoints() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DcVirtualInterfaceV2RemoteEpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2RemoteEpGroup">DcVirtualInterfaceV2RemoteEpGroup</a>

---



